import Discord from 'discord.js'
import fetch from 'node-fetch'
export default {
    name: 'mytemplates',
    async run(message ,args){
        let user = await fetch(`http://localhost:3000/users?id=${message.author.id}` , {
        headers:{
            'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',

        }
    })
    if(user.ok){
        user=await user.json()
        let servers = user.servers
        let embed = new Discord.MessageEmbed()
        embed.setTitle('Your Templates.')
        for(let server of servers){
            let serv = await fetch(`http://localhost:3000/templates?stamp=${server}` , {
                headers:{
                    'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',

                }

            })
            serv=await serv.json()
            // console.log(serv);
            serv=serv.head.name
            if(!serv)serv = "Unnamed Template"
            embed.addField(serv ,server)
        }
        message.channel.send(embed)
    }else{
message.channel.send('You dont have any templates')
    }}

}