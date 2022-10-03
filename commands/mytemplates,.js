import Discord from 'discord.js'
import fetch from 'node-fetch'
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url);
// import {server} from '../config.json'
const {server} = require('../config.json')
export default {
    name: 'mytemplates',
    async run(message ,args){
        console.log(`${server}/users?id=${message.author.id}`);
        let user = await fetch(`${server}/users?id=${message.author.id}` , {
        headers:{
            'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',

        }
    })
    if(user.ok){
        user=await user.json()
        let servers = user.servers
        let embed = new Discord.MessageEmbed()
        embed.setTitle('Your Templates.')
        for(let serverr of servers){
            let serv = await fetch(`${server}/templates?stamp=${serverr}` , {
                headers:{
                    'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',

                }

            });
            serv=await serv.json()

            // console.log(serv);
            serv=serv.head.name
            if(!serv)serv = "Unnamed Template"
            embed.addField(serv ,serverr)
        }
        message.channel.send(embed)
    }else{
message.channel.send('You dont have any templates')
    }}

}