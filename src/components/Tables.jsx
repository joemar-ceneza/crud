// icons
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";
// fetch
import useFetch from "../hook/useFetch";
import { useContext, useState } from "react";
import { CrudContext } from "../context/CrudContext";

// components
import Modal from "./Modal";

export default function Table() {
  const {
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
  } = useContext(CrudContext);

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {/* {updateForm._id && ( */}
        <form onSubmit={updateNote}>
          <div className="flex flex-1 justify-between">
            <div className="w-[48%] mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                first name
              </label>
              <input
                onChange={updateFieldChange}
                value={updateForm.title}
                name="title"
                type="text"
                autoComplete="off"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize"
              />
            </div>
            <div className="w-[48%] mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                last name
              </label>
              <input
                onChange={updateFieldChange}
                value={updateForm.body}
                name="body"
                type="text"
                autoComplete="off"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 capitalize"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              onChange={updateFieldChange}
              value={updateForm.email}
              name="email"
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email@gmail.com"
              autoComplete="off"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white capitalize bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            update note
          </button>
          <button
            onClick={closeModal}
            type="button"
            className="ml-2 text-white capitalize bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            cancel
          </button>
        </form>
        {/* )} */}
      </Modal>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              <th scope="col" className="w-[50px] px-6 py-3">
                id
              </th>
              <th scope="col" className="w-[443px] px-6 py-3">
                firs name
              </th>
              <th scope="col" className="w-[443px] px-6 py-3">
                last name
              </th>
              <th scope="col" className="w-[500px] px-6 py-3">
                email
              </th>
              <th scope="col" className="w-[100px] px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((note) => {
                return (
                  <tr
                    key={note._id}
                    className="odd:bg-white even:bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700 ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {note.displayId}
                    </th>
                    <td className="px-6 py-4">{note.title}</td>
                    <td className="px-6 py-4">{note.body}</td>
                    <td className="px-6 py-4 lowercase">{note.email}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-1 justify-between">
                        <MdEdit
                          onClick={() => toggleUpdate(note)}
                          className="font-medium text-yellow-500 dark:text-yellow-400 hover:underline text-lg cursor-pointer"
                        />
                        <MdDelete
                          onClick={() => deleteNote(note._id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline text-lg cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
