import express from "express";

const router = express.Router();

// GET /api/todos
router.get("/", async (req, res) => {
  try {
    res.json([]); // por ahora lista vacía
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tareas" });
  }
});

export default router;
