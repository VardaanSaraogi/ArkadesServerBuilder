import {compileServer , channel , category} from '../struct.js'

// const ServerMethods = require('../')
let server = compileServer('VardaansServer' , 
'no-category' ,
'abc1234',
[channel('EEEE') , channel('EEEE')],)
// export {server}
export default server






