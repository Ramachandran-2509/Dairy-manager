import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";



import PostRoutes from "./routes/posts.js";



const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


app.use('/posts', PostRoutes)
app.get('/', (req,res) => {
  res.send("Welcome to Diary Manager!!!")
})


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true, useUnifiedTopology : true}).then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`))).catch(error => console.log(error.message));
 
mongoose.set('useFindAndModify', false);

