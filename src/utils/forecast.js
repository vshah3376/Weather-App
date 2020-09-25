const request = require('request');

const forecast = (address, callback) => {
    const url ='http://api.openweathermap.org/data/2.5/weather?q=' + address + '&appid=e640324748b67076c145f41c84e7b129&units=metric';
 
    request({ url, json: true }, (error, response) =>{
       if(error){
          callback('Unable to connect to Weather API', undefined)
       }else if(!response.body.name){
          callback('Unable to find the location, Try another search', undefined)
       }else{
          callback(undefined, response.body.weather[0].description + '. Its Currently ' + response.body.main.temp  + ' Degrees out in ' +response.body.name )
       }
    })
 }

 module.exports = forecast