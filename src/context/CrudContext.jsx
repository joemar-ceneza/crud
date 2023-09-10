import { createContext, useState } from "react";
import useFetch from "../hook/useFetch";
import { request } from "../request";

export const CrudContext = createContext();

export default function CrudProvider({ children }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { loading, error, data, setData } = useFetch(apiUrl);

  // will delete this if not working
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // will delete
  const [createIsOpen, createSetIsOpen] = useState(false);
  const createOpenModal = () => {
    createSetIsOpen(true);
  };
  const createCloseModal = () => {
    createSetIsOpen(false);
  };

  const [createForm, setCreateForm] = useState({
    title: "",
    body: "",
    email: "",
  });

  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: "",
    email: "",
  });

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;
    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createNote = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // create the note
      const response = await request.post(apiUrl, createForm);
      // update state
      setData([...data, response.data.note]);
      // clear form state
      setCreateForm({
        title: "",
        body: "",
        email: "",
      });
      if (response.status === 200) {
        setIsSubmitting(false);
      }
    } catch (error) {
      console.log("Error adding post: ", error);
      setIsSubmitting(false);
    }
  };

  const deleteNote = async (_id) => {
    // delete the note
    await request.delete(`${apiUrl}/${_id}`);
    // update state
    const newData = [...data].filter((data) => {
      return data._id !== _id;
    });
    setData(newData);
  };

  const updateFieldChange = (e) => {
    const { name, value } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const toggleUpdate = (note) => {
    // get the current note values
    // set state on update form
    setUpdateForm({
      title: note.title,
      body: note.body,
      email: note.email,
      _id: note._id,
    });
    openModal();
  };

  const updateNote = async (e) => {
    e.preventDefault();
    const { title, body, email } = updateForm;
    setIsSubmitting(true);
    try {
      // send the update
      const response = await request.put(`${apiUrl}/${updateForm._id}`, {
        title,
        body,
        email,
      });
      // update state
      const newData = [...data];
      const dataIndex = data.findIndex((note) => {
        return note._id === updateForm._id;
      });
      newData[dataIndex] = response.data.note;
      setData(newData);
      // clear update form
      setUpdateForm({
        _id: null,
        title: "",
        body: "",
        email: "",
      });
      if (response.status === 200) {
        setIsSubmitting(false);
        closeModal();
      }
    } catch (error) {
      console.log("Error updating post: ", error);
      setIsSubmitting(false);
    }
  };

  return (
    <CrudContext.Provider
      value={{
        loading,
        error,
        data,
        setData,
        apiUrl,
        createForm,
        setCreateForm,
        updateForm,
        setUpdateForm,
        isOpen,
        openModal,
        closeModal,
        setIsSubmitting,
        updateCreateFormField,
        createNote,
        deleteNote,
        updateFieldChange,
        toggleUpdate,
        updateNote,
        createIsOpen,
        createOpenModal,
        createCloseModal,
      }}>
      {children}
    </CrudContext.Provider>
  );
}
