import Discord from 'discord.js'
export default {
    name:"help",
    async run(message , args){
        const embed = new Discord.MessageEmbed()
        .setTitle('Help')
        .addFields([
            {name:"mytemplates" , value:"Loads all your templates along with a unique digital stamp"},
            {name:"build stamp" , value:"Builds server using a template , identified with *stamp*"},
            {name:"copyserver templatename" , value:"Copies the current server you are in(Owners only) , and saves it with a stamp to your templates"},
            {name:"send stamp mention" , value:"Sends a template to someone else. **Once you use this command , you no longer own the template**"}
        ])
        .setDescription('Digital Stamp Explained: We , at ServerBuilder process a tremendous amount of data. Few templates are public and few templates are private. Multiple templates could have the same name , hence template name isnt an efficient way to identify a server. The digital stamp (Is a primary key), uniquely identifies your server, and is nessecary to manipulate your template. This digital stamp is correlated on our servers with your template , so rest assured , your data is safe')
        .setColor('red')
        message.channel.send(embed)
    }
}