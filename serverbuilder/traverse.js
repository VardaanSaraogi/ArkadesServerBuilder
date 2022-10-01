import {ServerConstructor} from './struct.js'
export default class ServerMethods{
 static async unpackServer(message , server){
    // console.log(server.head)c
    console.log(server)
    message.guild.channels.cache.forEach(channel=>channel.delete())
    message.guild.setName(server.head.name)
    
    function breadth(s){
        let count = 1
        let init = s.head.children[0]
        if(init.children){
            while (init.children.length > 0){                
                    console.log(count)
                    count+=1
                    init=init.children[0]
            }
            return count
        }
        else {
        return count
        }
    }
    if(breadth(server) == 2){
        for(let category of server.head.children){
            if(category.type === 'category'){
            console.log('yes')
            let temp = await message.guild.channels.create(category.name,{type:'category'})
            for(let channel of category.children){
                     message.guild.channels.create(channel.name,{type:channel.type}).then(res=>{
                        res.setParent(temp.id)
                     })
                    
                }  
            }else{
                if(category.name){
                message.guild.channels.create(category.name,{type:category.type})
                }
            }
        }

    }else{
        for(let channel of server.head.children){
         message.guild.channels.create(channel.name,{type:channel.type})
        }
    }
 }
 static async copyServer(message , name , stamp){
    const serv = new ServerConstructor()
    await serv.buildMain(name , stamp)
    await serv.extractFromServer(message)
    console.log(serv.breadth())
    return serv
 }

}

