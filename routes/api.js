import express from "express";
import * as UserController from "../app/controller/UsersController.js";
import * as BlogController from "../app/controller/BlogController.js";
const router = express.Router();

//Registration 
router.post("/register",UserController.register);

//Login
router.post("/login", UserController.login);

//Create a new blog

router.post("/create-blogs", BlogController.createBlog);

//Get all blogs 

router.get("/get-All-Blogs", BlogController.getAllBlogs);

//Get a single blog by id

router.get("/single-blog/:id", BlogController.singleBlogRead);


export default router;