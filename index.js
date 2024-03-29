const express=require('express');
const app=express();
require('dotenv').config();
const cors=require('cors');
const quoteRouter=require('./routes/quoteroute');

const PORT=process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.send("API is running");
});

app.use('/getQuote',quoteRouter);
app.listen(PORT,()=>{
    console.log(`Server listening on http://localhost:${PORT}`);
})
