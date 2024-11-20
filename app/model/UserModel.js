import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{type:String,unique:true, required:true,lowercase:true},
    password:{type:String,required:true},
    firstName:{type:String},
    lastName:{type:String},
    phone:{type:String},
    img:{type:String, default:0}
},{timestamps:true,versionKey:false});

export default mongoose.model('users', userSchema);