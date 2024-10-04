import React from "react";

const NoteModal = ({
  isModalOpen,
  closeModal,
  title,
  description,
  setTitle,
  setDescription,
  addNote,
}) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      <div className="bg-white p-5 rounded shadow-lg z-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Voeg een Notitie Toe</h2>
        <form onSubmit={addNote}>
          <input
            type="text"
            placeholder="Titel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <textarea
            placeholder="Beschrijving"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Toevoegen
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
            >
              Annuleren
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;
