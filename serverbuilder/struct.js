import util from 'util';

function category(name){
    return new node(false , name , 'category')
}
function channel(name ,type){
    return new node(false , name , type)
}
function compileServer(serverName , type  , stamp , arrayOfChannels  , arrayOfCategories){
    if(type=='category-full'){
        let serverObj = new ServerConstructor()
        serverObj.buildMain(serverName , stamp)
        serverObj.buildChannels(arrayOfCategories, arrayOfChannels)
        return serverObj
    }
    if(type=='no-category'){
        let serverObj = new ServerConstructor()
        serverObj.buildMain(serverName , stamp)
        serverObj.buildNonChannel(arrayOfChannels)
        return serverObj
    }
    if(type == 'dynamic'){
        let serverObj = new ServerConstructor()
        serverObj.buildMain(serverName , stamp)
        serverObj.buildNonChannel(arrayOfChannels)
        return serverObj
    }
}
class node{
    constructor(isHead , name , type){
        this.isHead=isHead
        this.children=[]
        this.name=name
        this.type=type
        if(isHead){
            this.stamp = ''
        }
    }
     breadth(){
        let count = 1
        let init = this.children[0]
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
}
class ServerConstructor{
    buildMain(serverName,stamp){
         this.head = new node(true , serverName , 'Header')
         this.head.stamp = stamp
    }
    buildChannels(categories ,channels){
        console.log(categories.length , channels.length)
        for(var i = 0 ;i<categories.length ;i++){
            let catch2 = categories[i]
            catch2.children = channels[i]
            this.head.children.push(catch2)
        }   
        if(channels.length > categories.length){
        for(let j = i;j<channels.length;j++){
            this.head.children.push(channels[j])
        }
    }
    }
    buildNonChannel(categories){
        this.head.children = [...categories]
    }
    extractFromServer(message){
        message.guild.channels.cache.forEach(c=>{
            if(c.type == 'category'){
                let big =category(c.name)
                this.head.children.push(big)
                c.children.forEach(smol=>{
                    console.log(smol.name)
                    big.children.push(channel(smol.name , smol.type))
                })
            }else if(!c.parent){
                this.head.children.push(channel(c.name , c.type))
            }
        })
    }

    [util.inspect.custom]() {
        console.log(this.breadth());
        if(this.breadth() == 2){
        let str = ""
        let tree = this
        console.log(tree.head.name)
        console.log(this.head.stamp)
        for(let i of tree.head.children){
             str+=`${i.name}:`
            for(let j of i.children){
            str+=`${j.name}\t`
            }
            str+="\n"
        }
        return str
    }else{
        let str = ""
        let tree = this
        console.log(tree.head.name)
        console.log(tree.head.stamp)
        for(let i of tree.head.children){
            // console.log(i);
            str+=`${i.name}:`
        }
        return str
    }
    }
    breadth(){
        return this.head.breadth()
    }
}
export {ServerConstructor , compileServer , channel , category}