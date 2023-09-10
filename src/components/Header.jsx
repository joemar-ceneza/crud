import { useContext, useState } from "react";
import Modal from "./Modal";
import { CrudContext } from "../context/CrudContext";

export default function Header() {
  const { createNote, createForm, updateCreateFormField } =
    useContext(CrudContext);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-1 justify-between py-10">
      <h2 className="text-5xl font-semibold">CRUD Database</h2>
      <button
        onClick={openModal}
        className="inline-block px-5 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0 capitalize">
        create note
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <form onSubmit={createNote}>
          <div className="flex flex-1 justify-between">
            <div className="w-[48%] mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                first name
              </label>
              <input
                onChange={updateCreateFormField}
                value={createForm.title}
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
                onChange={updateCreateFormField}
                value={createForm.body}
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
              onChange={updateCreateFormField}
              value={createForm.email}
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
            create note
          </button>
          <button
            onClick={closeModal}
            type="button"
            className="ml-2 text-white capitalize bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            cancel
          </button>
        </form>
      </Modal>
    </div>
  );
}
