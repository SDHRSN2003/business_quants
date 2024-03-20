import express from "express";
import { getAAPLData, getRGPData, getFYData, getYELPData, getZSData } from "./index.js";

const app = express();
app.use(express.json());

app.get("/Api/ticker", async(request,response)=>{
    try{
        const stocks = await getAAPLData();
        response.send(stocks);
    }catch(error){
        response.status(500).send('Problem with database');
    }
})

app.get("/Api/ticker=AAPL&column=revenue,gp", async(request,response)=>{
    try{
        const stocks = await getRGPData();
        response.send(stocks);
    }catch(error){
        response.status(500).send('Problem with database');
    }
})

app.get("/Api/ticker=AAPL&column=revenue,gp&period=5y", async(request,response)=>{
    try{
        const stocks = await getFYData();
        response.send(stocks);
    }catch(error){
        response.status(500).send('Problem with database');
    }
})

app.get("/Api/ticker=YELP", async(request,response)=>{
    try{
        const stocks = await getYELPData();
        response.send(stocks);
    }catch(error){
        response.status(500).send('Problem with database');
    }
})

app.get("/Api/ticker=ZS", async(request, response)=>{
    try{
        const stocks = await getZSData();
        response.send(stocks);
    }catch(error){
        response.status(500).send('Problem with database');
    }
})

app.use((err, request, response, next)=>{
    response.status(500).send('Something wrong happened.')
})

app.listen( 3800, ()=>{
    console.log('Server is running on port 3800');
})