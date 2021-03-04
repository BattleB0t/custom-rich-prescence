var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
    state : "Status",
    assets : {
        large_image : "logo",
        large_text : "Large Text",
    },
    buttons : [{label : "Button1" , url : "https://discord.gg/M8b88fdmeb"}]
},
})
})
client.login({ clientId : "CLIENT ID HERE" }).catch(console.error);
