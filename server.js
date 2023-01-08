const express=require("express");
const app=express();
app.get("/",function(request,response){
    response.sendFile(__dirname+"/homepage.html")
})
app.get("/dashboard.html",function(request,response){
    response.sendFile(__dirname+"/dashboard.html")
})
app.get("/homepage.html",function(request,response){
    response.sendFile(__dirname+"/homepage.html")
})
app.get("/Login_page.html",function(request,response){
    response.sendFile(__dirname+"/Login_page.html")
})
app.get("/sign_uppage.html",function(request,response){
    response.sendFile(__dirname+"/sign_uppage.html")
})
app.get("/skills.html",function(request,response){
    response.sendFile(__dirname+"/skills.html")
})
app.get("/user.html",function(request,response){
    response.sendFile(__dirname+"/user.html")
})

app.listen(3000);

