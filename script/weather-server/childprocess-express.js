const timeZones = require('weather-forecast-details');

// listener for child process
process.on("message", (message) => {
if(message == 'all-time-zones') {
    const weatherData = JSON.stringify(timeZones.allTimeZones());
    process.send(weatherData);
    process.exit();
}
else{
    const nextFivehoursWeather = JSON.stringify(timeZones.nextNhoursWeather(message.cityTDN,message.hours,timeZones.allTimeZones()));
    process.send(nextFivehoursWeather);
    process.exit();
}
});