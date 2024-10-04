import express from "express";
import {
  getTasks,
  createTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

// Routes
router.get("/", getTasks); // alles ophalen
router.post("/", createTask); // niewe notitie toevoegen
router.delete("/:id", deleteTask); // verwijderen

export default router;
