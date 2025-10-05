import express from "express";
import {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
} from "./project.controller";

const router = express.Router();

router.post("/", createProject);
router.get("/", getAllProjects);
router.get("/:id", getSingleProject);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
