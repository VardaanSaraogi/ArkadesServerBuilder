import server from '../serverbuilder/templates/test1.js'
import serverMethods from '../serverbuilder/traverse.js'
import fetch from 'node-fetch'

export default {
    name:"hello",
     async run(message , args){
            console.log(fetch('http://localhost:3000/templates?stamp=abc123'));
             console.log(server.head.children);
            serverMethods.unpackServer(message , server)
     }
}