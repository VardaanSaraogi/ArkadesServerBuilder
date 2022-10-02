import Express from 'express'
const app = new Express();
import server1 from './serverbuilder/templates/test1.js'
import server2 from './serverbuilder/templates/test2.js'
import fs from 'fs'
import cors from 'cors'
// import { apiKeyAuth } from ''
import { apiKeyAuth } from '@vpriem/express-api-key-auth';
const key = '9jN#BcavMWY*kZk5D20!8SGnS$X' 
import bodyParser from 'body-parser'
// const firebase = require("firebase/app");
// import firebase from "firebase/compat/app";

// import "firebase/compat/database";

// require('firebase/database')

let templates = []
let users = []
async function loadData(){
fs.readFile("./db.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    // console.log("File data:", jsonString);
    let valid = JSON.parse(jsonString)
    users=valid.users
    templates=[...templates , ...valid.servers]
    // console.log(valid
  });
}
async function writeServer(){
    const jsonString = JSON.stringify({
        users:users,
        servers:templates
    })
  
    fs.writeFile('./db.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
}
async function writeUsers(){
    const jsonString = JSON.stringify(users)
    fs.writeFile('./db.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
}
async function wrapper(){
await loadData()
}
wrapper()
app.use(bodyParser.json())
app.use(cors())
app.use(apiKeyAuth([key]))

app.get('/templates', async (req, res) => {
    let stamp = req.query.stamp
    for(let template of templates){
        if(template.head.stamp == stamp){
            return res.send(template)            
        }
    
    }
    return res.sendStatus(404)
    // res.send(templates)

})


app.post('/templates', async (req, res) => {

    let bod = req.body
    console.log(bod , 'ddd')
    templates.push(bod)
    await writeServer()

})
app.get('/tottemplates' , (req , res)=>{
    console.log(typeof(templates[0]));

    res.send(templates)
})
app.get('/users' , (req , res)=>{
    let flag = false
    for(let user of users){
        if(req.query.id == user.id){
            flag = true
            return res.send(user)            
        }
    }
    if(flag === false){
     return res.sendStatus(404)
    }
})
app.get('/tot' , (req  , res)=>{
    res.send(users)
})
app.post('/users' , async (req , res)=>{
    console.log(req.body);
    let id = req.body.id;
    let index = users.map(function(x) {return x.id; }).indexOf(id);

    if(index != -1){
    users[index].servers = req.body.servers
    }else{
        users.push(req.body)
    }
    await writeServer()
    // console.log(users);

})




app.listen(process.env.PORT , ()=>console.log('Arkade backend servers up and running'))