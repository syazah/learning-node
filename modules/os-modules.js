//OPERATING SYSTEM
const os = require("os");

//user info
console.log(os.userInfo());

//Uptime
console.log(`The System Has Been Running ${os.uptime() / 100} HR`);

//PATH MODULES
const path = require("path");
console.log(path.sep);
