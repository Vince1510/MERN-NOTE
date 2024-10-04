import React, { useState, useEffect } from "react";
import axios from "axios";
import { TrashIcon } from "@heroicons/react/24/outline";
import NoteModal from "./components/NoteModal";
import NoteList from "./components/NoteList"; // Import the new NoteList component
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/tasks");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes", error);
    }
  };

  const addNote = async (e) => {
    e.preventDefault();
    try {
      const newNote = { title, description };
      const response = await axios.post(
        "http://localhost:4000/api/tasks",
        newNote
      );
      setNotes([...notes, response.data]);
      setTitle("");
      setDescription("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding note", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/tasks/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note", error);
    }
  };

  return (
    <div className="App max-w-lg mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-6">Notitie App</h1>

      {/* Button to open the modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
      >
        Notitie toevoegen
      </button>

      {/* Modal */}
      <NoteModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        addNote={addNote}
      />

      <h2 className="text-2xl font-bold mb-4">Notities</h2>

      {/* NoteList component */}
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
