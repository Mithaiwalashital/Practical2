const os=require("os");
console.log("\n operating system architecture:"+os.arch());
console.log("\n freee memory of the operating system:"+os.freemem()/(1024*1024*1024));
console.log("\n total memory of the operating system:"+os.totalmem()/(1024*1024*1024));
console.log("\n operating system platform: "+os.platform());
console.log("\n Display Information about current logged user:");
console.log(os.userInfo());