import { AllBlogsService, blogService, singleBlogReadService } from "../service/BlogService.js";


//Create blog service
export const createBlog = async(req,res)=>{
    let result = await blogService(req)
    res.json(result);
}

// GET All Blogs Service

export const getAllBlogs = async(req,res)=>{
    let result = await AllBlogsService(req);
    res.json(result);
}

// Single blog read

export const singleBlogRead = async(req,res)=>{
    let result = await singleBlogReadService(req);
    res.json(result);
}