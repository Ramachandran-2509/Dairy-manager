import express from "express";
const router = express.Router();

import { getPosts, createPost, editPost, deletePost, likePost} from "../controllers/posts.js";

router.get("/", getPosts);
router.post("/", createPost);
router.patch('/:id', editPost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);


export default router;
