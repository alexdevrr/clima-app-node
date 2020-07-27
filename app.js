const weather = require('./weather/api');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const loc = argv.direccion;

weather.getWeather(loc).then(({ data }) => {
    if (data.cod == 200) {
        console.log(`El clima de ${loc} es de ${data.main.temp}°`);
    }
}).catch(e => {
    console.log(`Error, la ciudad no existe`);
});