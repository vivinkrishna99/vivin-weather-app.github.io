/**
 * Creating web server using express framework.
 */

const express = require('express');
const cors = require('cors');
const { fork } = require('child_process');

const app = express();
app.use(express.json()); 
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/api/all-time-zones',(req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET,POST");
    res.set('Content-Type', 'application/json')

    // creating child process using fork
    const childProcess = fork('./childprocess-express.js');
    childProcess.send('all-time-zones');
    childProcess.on('message', (weatherData) => {
		res.send(weatherData)
	});	
	childProcess.on('error', err =>{
		console.log(`ERROR! ${err}`);
	});
});

app.post('/api/hourly-forecast',(req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET,POST");
    res.set('Content-Type', 'application/json')
    let cityTDN = req.body.city_Date_Time_Name;
    let hrs = req.body.hours;
    if(cityTDN && hrs){

		// creating child process using fork
		const childProcess = fork('./childprocess-express.js');
		childProcess.send({'cityTDN':cityTDN, 'hours':hrs});
		childProcess.on('message', (nextFiveHours) => {
			res.send(nextFiveHours)
		});
		childProcess.on('error', err =>{
			console.log(`ERROR! ${err}`);
		});
    }else{
    res
        .status(404)
        .json({Error: "Not a valid endpoint. Please check API doc"});
    }
});

app.listen(port, () => {
    console.log(`Listening to port ${port}... `);
})