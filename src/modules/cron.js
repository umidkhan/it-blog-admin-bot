const cron = require("node-cron");
const axios = require("axios");
require("dotenv").config();

const task = cron.schedule("*/10 * * * *", async () => {
    try {
        const response = await axios.post(process.env.WEBHOOK_URI);
        console.log(`POST requrest sent ${response.data}`);
    } catch (err) {
        console.error(`!ERROR: ${err}`);
    }
})

module.exports = task;