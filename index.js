import express, { response } from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const port = 3000;
const app = express();
const API_URL = "https://dog.ceo/api/breeds/image/random";

app.get("/",async(req,res)=>{
    try {
        const result = await axios.get(API_URL)
        const imageUrl = result.data.message;
        console.log(result.data);
        res.render("index.ejs",{
            data:imageUrl
        })
    } catch (error) {
        console.log(error.meassage)
    }
})

app.post("/fetch",async(req,res)=>{
    try {
        const result = await axios.get(API_URL)
        const imageUrl = result.data.message;
        console.log(result.data);
        console.log(imageUrl);
        res.render("index.ejs",{
            data:imageUrl
        })
    } catch (error) {
        console.log(error.meassage)
    }
})

app.listen(port,()=>{
    console.log(`Server running on port${port} `)
})