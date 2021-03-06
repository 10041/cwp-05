const path = require("path");
const Moment = require("moment");
const fs = require('fs');

module.exports = class helb {
	static Log(data) {
		const logPath = path.resolve(`./log/${Moment().format("MM-DD-YY")}.json`);
		fs.stat(logPath, (err, stat)=>{
            if(err){
                fs.writeFile(logPath, JSON.stringify([data]));                
            }
            else{
                fs.readFile(logPath, (err, val) => {
                    let log = JSON.parse(Buffer.from(val).toString());
					log.push(data);
					fs.writeFile(logPath, JSON.stringify(log), ()=>{});
                });
            }
        });
	}

	static CreateLogObjFromReq(url, body) {
		return {
			date: Moment().format("MM-DD-YY HH:mm:ss"),
			url,
			body
		}
	}
};