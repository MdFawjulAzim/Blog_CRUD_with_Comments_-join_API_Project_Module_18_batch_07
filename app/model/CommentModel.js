import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    comment:{type:String,required:true},
    blogID:{type:mongoose.Schema.Types.ObjectId ,required:true},
},{timestamps:true,versionKey:false});

export default mongoose.model('comments', userSchema);