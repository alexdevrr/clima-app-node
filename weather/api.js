const axios = require('axios').default;

const apiKey = '15c4d57a1706b99bf745065a703acf87';

const getWeather = async (city) => {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
}

module.exports = {
    getWeather
}