// import server = from '../serverbuilder/templates/test1')
// import {ServerConstructor} from '../serverbuilder/struct'
import fetch from 'node-fetch'
import ServerMethods from '../serverbuilder/traverse.js'
import {uid} from 'uid'
export default {
    name:"copyserver",
     async run(message , args){
     let serv = await ServerMethods.copyServer(message , args[0]  , uid())
      let user = await fetch(`http://localhost:3000/users?id=${message.author.id}` , {
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
        fetch('http://localhost:3000/users' , {
          headers: {
            'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",

          body: JSON.stringify({
            id:message.author.id,
            servers:arr
          })
        })
      }else{
      let  arr = [serv.head.stamp]
        fetch('http://localhost:3000/users' , {
          headers: {
            'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',

            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
            id:message.author.id,
            servers:arr
          })
        
        })
      }
     fetch("http://localhost:3000/templates",
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