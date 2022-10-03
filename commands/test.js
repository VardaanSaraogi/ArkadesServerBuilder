// import server from '../serverbuilder/templates/test1.js'
import serverMethods from '../serverbuilder/traverse.js'
import fetch from 'node-fetch'
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url);
// import {server} from '../config.json'
const {server} = require('../config.json')
export default {
    name:"hello",
     async run(message , args){
        let serv = await ServerMethods.copyServer(message , args[0]  , uid())

            console.log(fetch('${server}/templates?stamp=abc123'));
             console.log(server.head.children);
            serverMethods.unpackServer(message , server)
     }
}