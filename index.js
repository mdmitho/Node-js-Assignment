const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./utils/dbConnect");
const app = express();
const port = process.env.PORT || 5000;




const toolsRoutes = require("./routes/v1/tools.route");


app.use(cors());
app.use(express.json());
app.use(express.static("public"))// publick folder ar moday ja ja thakby amra accace kortay parbo
app.set("view engine","ejs")



//Apply the tate limiting middleware to all requests
// app.use(limiter)
dbConnect()
app.use("/api/v1/parts", toolsRoutes);

app.get('/',(req,res)=>{
  //res.send("Hello World")
  // res.sendFile(_dirname + "./test.html")

res.render("home.ejs",{
  id:5,
  user:{
    name:"test"
  }
})

})

app.all("*",(req,res)=>{
  res.send("No route found")
})

app.listen(port, () => {
  console.log("Example ");
});

process.on('unhandledRejection',(error)=>{
  console.log(error.name,error.message);
  app.close(()=>{
    process.exit(1)
  })
})