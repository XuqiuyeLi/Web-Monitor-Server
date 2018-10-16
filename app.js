
/* 
 * @author Summer Li
 * @version 1.0
 */

const prober = require('./prober.js');
const http = require('http');
const URLparser = require("url");
const fs = require("fs");




/*
 * Check if the given url is valid
 */
function validURL (url) {
	const fullurl = URLparser.parse(url);
	// valid url has to include http protocols and on port 80
	if(fullurl.protocol === 'http:'){
		return fullurl.host;
	}
	else {
		return 0;
	}
}



// Take the first arg as URL, second arg as path to the sample file
const URL = process.argv[2];
const host = validURL(URL) ? validURL(URL) : undefined;
const sampleFilePath = process.argv[3];
const report = `URL=${host}\n`;




// Write to the provided path a file the url we are sending requests to
fs.writeFile(`${sampleFilePath}`, report, (err) => {
  if (err){
  	return console.log('uh oh', err);
  } 
});





/******    Start Running the Prober    *******/

const app = new prober.Prober(host);


console.log("\nStart running the prober on the given URL...\n");
console.log("Check your sample.txt file for the full report!\n");


const start_time = Date.now();
// get http status every 30 seconds
const timer = setInterval(function() {
	const millis = Date.now() - start_time;
	console.log(`seconds elapsed:  ${Math.floor(millis/1000)}s\n`);
	// get the sample report and append it to the sample file
	app.Request_Status(sampleFilePath);

}, 30000);

