// import server = from '../serverbuilder/templates/test1')
// import {ServerConstructor} from '../serverbuilder/struct'
import fetch from 'node-fetch'
import ServerMethods from '../serverbuilder/traverse.js'
import {uid} from 'uid'
// import {server} from '../config.json'
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url);
// import {server} from '../config.json'
const {server} = require('../config.json')
export default {
    name:"copyandsend",
     async run(message , args){
        let mention = message.mentions.users.first().id;

     let serv = await ServerMethods.copyServer(message , args[0]  , uid())
      let user = await fetch(`${server}/users?id=${mention}` , {
        headers:{
          'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',
        }
      })
      console.log(user.ok)
      if(user.ok){
        let d = await user.json()
        console.log(d)
        let arr = d.servers
        arr.push(serv.head.stamp)
        console.log(arr)
        fetch(`${server}/users` , {
          headers: {
            'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",

          body: JSON.stringify({
            id:mention,
            servers:arr
          })
        })
      }else{
      let  arr = [serv.head.stamp]
        fetch(`${server}/users` , {
          headers: {
            'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',

            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
            id:mention,
            servers:arr
          })
        
        })
      }
     fetch(`${server}/templates`,
     {
         headers: {
          'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',

           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         method: "POST",
         body: JSON.stringify(serv)
     })

     message.channel.send(serv.head.stamp)

     }
}