import express, { response } from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const port = 3000;
const app = express();
const API_URL = "https://dog.ceo/api/breeds/image/random";
const API_URL_CAT = "https://api.thecatapi.com/v1/images/search?limit=1";
const API_KEY = {
    Headers:{
        headers: {
        'x-api-key':'live_viBHhcLRkR2pjxU2nfKfSacQzrSdXF6FaDRuo0xDeWFtFWl8AUgzVjJKKQsSMxXj'
      } 
    }
}

let imageUrlcat = [];
let imageUrldog = [];

app.get("",(req,res)=>{
    res.render("index.ejs",{
        data: imageUrldog,
        data_cat: imageUrlcat
    });
})

app.post("/fetch-cat",async(req,res)=>{
    try {
        const result_cat = await axios.get(API_URL_CAT,API_KEY)
        const imageUrl = result_cat.data[0].url;
        console.log(result_cat.data[0].url);
        imageUrlcat.push(imageUrl);
        res.render("index.ejs",{
            data: imageUrldog,
        data_cat: imageUrlcat
        })
    } catch (error) {
        console.log(error.meassage)
    }
})

app.post("/fetch",async(req,res)=>{
    try {
        const result = await axios.get(API_URL)
        const imageUrl = result.data.message;
        imageUrldog.push(imageUrl);
        console.log(result.data);
        console.log(imageUrl);
        res.render("index.ejs",{
            data: imageUrldog,
            data_cat: imageUrlcat
        })
    } catch (error) {
        console.log(error.meassage)
    }
})

app.listen(port,()=>{
    console.log(`Server running on port${port} `)
})