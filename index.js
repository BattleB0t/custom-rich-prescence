var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
    state : "Playing Minecraft",
    assets : {
        large_image : "logo",
        large_text : "Join the server!",
    },
    buttons : [{label : "JOIN" , url : "https://discord.gg/M8b88fdmeb"}]
},
})
})
client.login({ clientId : "815978466067087371" }).catch(console.error);
