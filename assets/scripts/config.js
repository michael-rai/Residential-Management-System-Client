'use strict'

let apiUrl
const apiUrls = {
  production: 'https://res-mgt-sys.herokuapp.com',
  development: 'http://localhost:4741'
}
if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

let apiWeatherUrl
const apiWeatherUrls = {
  production: 'http://api.openweathermap.org/data/2.5/weather?q=manhattan,us&APPID=2731a5edd65f1ad3c5130e9a8fc12314&units=imperial',
  development: 'http://api.openweathermap.org/data/2.5/weather?q=manhattan,us&APPID=2731a5edd65f1ad3c5130e9a8fc12314&units=imperial'
}
if (window.location.hostname === 'localhost') {
  apiWeatherUrl = apiWeatherUrls.development
} else {
  apiWeatherUrl = apiWeatherUrls.production
}

module.exports = {
  apiUrl,
  apiWeatherUrl
}
