import fetch from 'node-fetch'
export default {
    name:"send",
    async run(message , args){
        let mention = message.mentions.users.first().id;
        console.log(mention)
        let stamp = args[0]
        let SenderUser = await fetch(`http://localhost:3000/users?id=${message.author.id}` , {
            headers:{
                'X-API-KEY':'9jN#BcavMWY*kZk5D20!8SGnS$X',
            }
        })
        let recieverUser = await fetch(`http://localhost:3000/users?id=${mention}` , {
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
                  fetch('http://localhost:3000/users' , {
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
            fetch('http://localhost:3000/users' , {
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
            fetch('http://localhost:3000/users' , {
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