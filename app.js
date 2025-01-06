import express, { Router } from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import {MONGODB_CONNECTION,PORT,Max_JSON_SIZE,URL_ENCODER,WEB_CACHE,REQUEST_LIMIT_TIME,REQUEST_LIMIT_NUMBER} from "./app/config/config.js";
import router from "./routes/api.js";



const app = express();

//! App Security Settings

app.use(cors());
app.use(express.json({limit: Max_JSON_SIZE}));
app.use(express.urlencoded({extended:URL_ENCODER}))
app.use(helmet());

//! Rate Limiting
const limiter = rateLimit({
  windowMs: REQUEST_LIMIT_TIME, // 15 minutes
  max: REQUEST_LIMIT_NUMBER, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

//! cache Settings
app.set('etag',WEB_CACHE)

//! Connect to MongoDB
mongoose.connect(MONGODB_CONNECTION,{autoIndex:true}).then(()=>{
    console.log("Connected to MongoDB")
}).catch(()=>{
    console.error("Failed to connect to MongoDB")
})

// Routes
app.use("/api",router)

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
})