import { Router } from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from "../controllers/todo.controller.js";

router.get("/", async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tareas" });
  }
});