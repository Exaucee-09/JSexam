const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.json());

app.post("/add",(req,res)=>{
    const numbers=req.body.numbers;
    let sum=0;

    for(const num of numbers){
        sum +=num;
    }
    res.send({result:sum});
})

app.post("multiply", (req,res)=>{
    const numbers=req.body.numbers;
    let product=1;

    for(const num of numbers){
        product*=num;
    }
    res.send({result:product});
})

app.listen(6100,()=>{
    console.log("Peace Exaucee\'s simple calculator API server is running on port 6100");
});