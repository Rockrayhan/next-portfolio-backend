import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "./blog.controller";

const router = express.Router();

// CRUD routes
router.post("/", createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.patch("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
