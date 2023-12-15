const os = require("os");
console.log("Architecture: " + os.arch());
/**
 * Architecture : x64
 * This is used so that we can know the architecture of the OS System.
 */
console.log("Free memory: " + os.freemem());
/**
 * Free memory 482992128
 * This is used so that we can know the free memory of the OS System.
 */
console.log("Total Memory: " + os.totalmem());
/**
 * Total Memory 6280437760
 * This is used so that we can know the total memory of the OS System.
 */
console.log("OS type :" + os.platform());
/**
 * OS type :win32
 */
console.log("OS Platform :" + os.platform());
/**
 * OS Platform :win32
 */
