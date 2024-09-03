const app = require("./core/server");
const task = require("./modules/cron");
require("dotenv").config();

task.start();
app.listen(process.env.PORT || 8080, () =>
  console.log("Server listening on port " + process.env.PORT)
);
