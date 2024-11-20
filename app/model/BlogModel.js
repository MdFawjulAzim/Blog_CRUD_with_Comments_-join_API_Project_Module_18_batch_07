import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title:{type:String,required:true},
    des:{type:String,required:true},
},{timestamps:true,versionKey:false});

export default mongoose.model('blogs', userSchema);