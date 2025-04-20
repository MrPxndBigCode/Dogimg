import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const port = 3000;
const app = express();
const API_URL = "https://dog.ceo/api/breeds/image/random";

app.get("/",(req,res)=>{
    res.render("index.ejs", { content: "Waiting for data..." });
})

app.listen(port,()=>{
    console.log(`Server running on port${port} `)
})