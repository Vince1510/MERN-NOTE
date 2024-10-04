import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const NoteList = ({ notes, deleteNote }) => {
  return (
    <ul className="space-y-4">
      {notes.map((note) => (
        <li
          key={note._id}
          className="p-4 border border-gray-300 rounded flex justify-between items-center"
        >
          <div>
            <h3 className="text-xl font-semibold">{note.title}</h3>
            <p>{note.description}</p>
          </div>
          <button
            onClick={() => deleteNote(note._id)}
            className="ml-2 p-1 rounded hover:bg-red-400"
          >
            <TrashIcon className="h-5 w-5 text-red-100" aria-hidden="true" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
