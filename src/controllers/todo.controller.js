import Todo from "../models/Todo.js";

// GET /api/todos
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tareas" });
  }
};

// POST /api/todos
export const createTodo = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: "El título es obligatorio" });
  }

  try {
    const newTodo = new Todo({
      title,
      description,
    });

    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la tarea" });
  }
};

// PUT /api/todos/:id
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la tarea" });
  }
};

// DELETE /api/todos/:id
export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    res.json({ message: "Tarea eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la tarea" });
  }
};
