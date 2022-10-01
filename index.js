import  fs  from 'fs'
import Discord from 'discord.js';
const client = new Discord.Client()
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const {prefix} =require('./config.json')

require('dotenv').config()
client.commands = new Discord.Collection();
// u fs = require("fs");

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
// import * as event from '../util/eventHandler'

for (const file of commandFiles){
let command =await import( `./commands/${file}`)
command=command.default
// console.log(command);
client.commands.set(command.name , command)
} 
client.on('ready', ()=>{
    console.log('Arkade up');
})

client.on('message' , message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLowerCase();
 
    if (!client.commands.has(command)) return;
    try{
        client.commands.get(command).run(message , args , client);
    }catch (error){
        console.log(error)
        message.reply("THERE WAS AN ERRORR!!!")
    }
})
 
client.login(process.env.token);