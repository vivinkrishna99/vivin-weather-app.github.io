/**
 * Creating web server using http module
 */

 const http = require("http");
 const timeZones = require("./timeZone.js");
 const port = process.env.PORT || 5000;
 
 http
   .createServer((req, res) => {
    console.log("New connection...");
    if(req.method === "GET"){
        if (req.url === "/api/all-time-zones") {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify(timeZones.allTimeZones()));
            res.end();
        }
        else{
            res.end("Please enter a valid URL!");
        }
    } 
    else if (req.method === 'POST') {
        if(req.url === "/api/hourly-forecast"){
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.writeHead(200, { "Content-Type": "application/json" });
            req.on("data", chunk => {
                let cityTDN = JSON.parse(chunk.toString("utf8"))["city_Date_Time_Name"];
                let hrs = JSON.parse(chunk.toString("utf8"))["hours"];
                res.write(
                    JSON.stringify(
                        timeZones.nextNhoursWeather(cityTDN, hrs, timeZones.allTimeZones())
                    )
                );
            });
        }else{
            res.end("Please enter a valid URL!!");
        }
       req.on("end", () => {
         res.end();
       });
    } else {
       res.statusCode = 404;
       res.write("Request method was not found");
       res.end();
    }
   })
   .listen(port);
 console.log(`Listening to port ${port}...`);
 