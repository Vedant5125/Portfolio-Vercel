let express = require("express")
let cors = require("cors")
let {MongoClient} = require("mongodb")

let app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb://127.0.0.1:27017";

app.post("/msg",(req,res)=>{
    let client = new MongoClient(url);
    client.connect();

    let database = client.db("PortfolioContactDB");
    let collect = database.collection("contacts");

    let obj ={
        name : req.body.name,
        email : req.body.email,
        message : req.body.message
    };

    collect.insertOne(obj)
    .then((result)=>{res.send(result)})
    .catch((error)=>{res.send(error)})
})


app.get("/get",(req,res)=>{
   let client = new MongoClient(url);
    client.connect();

    let database = client.db("mern");
    let collect = database.collection("events");

    collect.find().toArray()
    .then((result)=>{res.send(result)})
    .catch((error)=>{res.send(error)})
})

app.listen(9000,()=>{console.log("express is active")});