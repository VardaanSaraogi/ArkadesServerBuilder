// import { createRequire } from "module"; // Bring in the ability to create the 'require' method
// const require = createRequire(import.meta.url);
const reqEvent = (event) => import (`../events/${event}`)

exports.default = bot => {
    bot.on("ready" , function() {reqEvent("ready") (bot)})
}