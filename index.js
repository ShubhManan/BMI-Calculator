const express= require('express');
const bodyParser = require('body-parser');
const { response } = require('express');

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator",function(request,response){
    response.sendFile(__dirname+"/index.html");
})

app.post("/bmicalculator",function(request,response){
    var weight=Number(request.body.weight);
    var height=Number(request.body.height);
    var bmi=weight/(height);
    bmi=bmi/height;
    response.send("the BMI is :" + bmi);
})

app.listen(3000,function(){
    console.log("server is working");
})