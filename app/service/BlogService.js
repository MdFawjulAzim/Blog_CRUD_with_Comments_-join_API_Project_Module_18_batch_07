import mongoose from "mongoose";
import BlogModel from "../model/BlogModel.js";
const { ObjectId } = mongoose.Types;


//blogService 

export const blogService =async (req)=>{
    try{
        let reqBody = req.body;
        let data = await BlogModel.create(reqBody);
        return {status: "success", data: data};
    }catch(e){
        return {status: "error", message:e.toString()}
    }
}

//all blog read Service

export const AllBlogsService =async (req)=>{
    try{
        let data = await BlogModel.find();
        return {status: "success", data: data};
    }catch(e){
        return {status: "error", message:e.toString()}
    }
}

// Single blog read Service

export const singleBlogReadService =async (req)=>{
    try{
        let id =new ObjectId(req.params.id);
        let data = await BlogModel.find({_id:id});
        return {status: "success", data: data};
    }catch(e){
        return {status: "error", message:e.toString()}
    }
}

// 