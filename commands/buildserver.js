import ServerMethods from '../serverbuilder/traverse.js'
import fetch from 'node-fetch'
// import {server} from '../config.json'
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url);
// import {server} from '../config.json'
const {server} = require('../config.json')
export default {
    name:"build",
    async run(message ,args){
    let stamp = args[0]
    let user = await fetch(`${ServiceWorkerContainer}/users?id=${message.author.id}` , {
        headers:{
            'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',

        }
    })
    let dee = await user.json()
    console.log(dee)
    if(dee.servers.includes(stamp)){
            let serv = await fetch(`${server}/templates?stamp=${stamp}` , {
                headers:{
                    'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',

                }

            })
            let d= await serv.json()
            // console.log(d.head.breadth())
            ServerMethods.unpackServer(message , d)
    }else{
        message.channel.send('Server not found')
    }
    }
} 