const axios = require('axios')

const getClima = async (lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=ac4b7093bc5847c329ef51891c348a80&units=metric`)

    return resp.data.main
}

module.exports = {
    getClima
}