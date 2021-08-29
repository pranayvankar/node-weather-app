const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=5352045ce41167292f85c211f7567678&query='+ latitude+','+ longitude+'&units=m'

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined,undefined,
//                  {body.current.weather_descriptions[0]})
//         }
//     })
// }


const forecast = async (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5352045ce41167292f85c211f7567678&query='+ latitude+','+ longitude+'&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out.')
        }
    })
}

module.exports = forecast