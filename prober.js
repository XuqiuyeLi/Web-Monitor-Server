/* 
 * @author Summer Li
 * @version 1.0
 */


const fs = require("fs");
const request = require('request-promise');
const http = require('http');





class Prober {
	// create a prober project using the given host website
	constructor(host) {
		this.website = host;
        this.opt = {
            method: 'GET',
            uri: `http://${host}`,
            resolveWithFullResponse: true
        };

	}

	// write to the file the new status code of the given website
	Request_Status(sampleFilePath){
        const path = sampleFilePath;
        let report,status;
        request(this.opt)
            .then(function (response) {
                // Request was successful, send the report
                const $CUR_TIME = Date.now();
                status = response.statusCode;
                report = `${$CUR_TIME},${status}\n`;
                fs.appendFile(path, report, (err) => {
                    if (err){
                        return console.log('uh oh', err);
                    } 
                });
                
            })
            .catch(function (err) {
                // Something bad happened, handle the error
                const $CUR_TIME = Date.now();
                status = -1;
                report = `${$CUR_TIME},${status}\n`;
                fs.appendFile(path, report, (err) => {
                    if (err){
                        return console.log('uh oh', err);
                    } 
                });
            });
  
        return this;
    }

}


module.exports = {
    Prober: Prober,
};