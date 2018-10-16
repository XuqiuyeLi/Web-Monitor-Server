
# A simple prober for monitoring websites performance

## How to build the prober
- The **prober.js** has a Prober class which
	- Require `"http"`,`"fs"`, `"request-promise"` modules to build the prober.js
  	- `constructor(host)` create a prober project using the given host website
  	- `Request_Status(sampleFilePath)` write to the sample file the new status code of the given website 
  	- Remember to export the prober class using `module.exports` so that you can access it from **app.js**

- The **app.js** takes two arguments: <url> and <path-to-sample-file>
	- Require `"http"`, `"url"`, `"fs"`, `"prober.js"` modules to build the app.js
	- Validate the given url using `validURL (url)` function 
	- Use `fs.writeFile` to write the url header to your sample.txt 
	- Set a timer `setInterval(function(){<<your function here>>}, 30000);`for automatically calling the prober and generate reports every 30 seconds


## How to run the prober
**Set up**
- Go to to prober folder in largescale/assignments/ex1 -- `cd` command in terminal
- Make sure you have both prober.js and app.js in the director  -- `ls` command 

**Install node**
- If you already have node installed, skip this step
- Install node in your terminal:
	- [Mac](https://blog.teamtreehouse.com/install-node-js-npm-mac)
	- [Windows](https://blog.teamtreehouse.com/install-node-js-npm-windows)

**Install relevant npm modules**
- `npm install --save request`
- `npm install --save request-promise`

**Run the app.js** <br/>
Warnings: the program takes only two arguments: "url" and "path-to-sample-file", incorrect number of arguments and invalid ones will result in errors
- Sample run `node app.js http://www.google.com sample.txt` 
	- You can replace the url and the path 
- It will show on the terminal how many seconds have passed since the prober started monitoring the webiste
- Check the **sample.txt** for the full report including "time,statusCode"



### HTTP Status Codes
- only `200: "Everything is OK" ` & `302: “The requested resource has moved, but was found.”` status codes are considered that the website is ***up running***
- all other status codes indicate the website is ***down***, hence will be recorded as -1 for http status in the sample file



### License
MIT
