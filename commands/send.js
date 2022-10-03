import fetch from 'node-fetch'
// import {server} from '../config.json'
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url);
// import {server} from '../config.json'
const {server} = require('../config.json')
export default {
    name:"send",
    async run(message , args){
        let mention = message.mentions.users.first().id;
        console.log(mention)
        let stamp = args[0]
        let SenderUser = await fetch(`${server}/users?id=${message.author.id}` , {
            headers:{
                'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',
            }
        })
        let recieverUser = await fetch(`${server}/users?id=${mention}` , {
            headers:{
                'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',
            }
        })
        if(SenderUser.ok  && recieverUser.ok){
            SenderUser=await SenderUser.json()
            recieverUser=await recieverUser.json()
            if(SenderUser.servers.includes(stamp)){
                let arr =   SenderUser.servers.filter(serv=>serv!==stamp)
                console.log(arr)
                let arr2 = recieverUser.servers
                arr2.push(stamp)
                fetch(`${server}/users` , {
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
                  fetch(`${server}/users` , {
                    headers: {
                      'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    method: "POST",
          
                    body: JSON.stringify({
                      id:mention,
                      servers:arr2
                    })
                  })
                
            }else{
                message.channel.send('Not foujnd')
            }
        }else if(SenderUser.ok && !recieverUser.ok){
            SenderUser=await SenderUser.json()
            let arree =   SenderUser.servers.filter(serv=>serv!==stamp)

            if(SenderUser.servers.includes(stamp)){

            let  arre = [stamp]
            fetch(`${server}/users` , {
              headers: {
                'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',
    
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({
                id:mention,
                servers:arre
              })
            
            })
            fetch(`${server}/users` , {
              headers: {
                'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',
    
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({
                id:message.author.id,
                servers:arree
              })
            
            })



        }else{
            message.channel.send('Not foujnd')

        }
        }


    }
}