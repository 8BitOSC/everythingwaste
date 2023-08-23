const wasteof = require("wasteof.js")
const client = new wasteof.Client()
const fs = require('fs')
const schedule = require('node-schedule');

require('dotenv').config();

client.on("ready", () => {
    console.log("Logged in!")
    //post();
    schedule.scheduleJob('0 12 * * *', () => {
        const txt = fs.readFileSync('./everything.txt', { encoding: 'ascii' }).split(/\r?\n/);
        console.log(txt)
        const item = txt[Math.floor(Math.random()*txt.length)];
        client.post(item + ' is a wasteof.money');
    });
})

client.login(process.env.USER, process.env.PASS)