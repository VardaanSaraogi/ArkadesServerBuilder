import {compileServer , channel , category} from '../struct.js'
// const ServerMethods = require('../')
let server = compileServer('VardaansServer' , 
'category-full' ,
'abc123',
[ [channel('Channel 1') , channel('Channel 2')] , [channel('Channel 3') , channel('Channel 4')]  ,channel('Voice 1' , 'voice')],                         
[category('Category 1') , category('Category 2') ]

)
// module.exports = server
export default server
