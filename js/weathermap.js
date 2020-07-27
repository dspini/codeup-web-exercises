$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: openWeathermapKey,
    lat: 29.4241219,
    lon: -98.4936282,
    units: "imperial",
}).done(function(data) {
    console.log(data);
    // Date
    for (var i=0; i<5; i++) {
        let cardId = "#card" + i
        // Date
        let date = new Date(data.daily[i].dt * 1000);
        $(cardId + " #weatherDate").html(date.toDateString());
        console.log(data.daily[i].dt)
        // Temp
        let lowTemp = data.daily[i].temp.min;
        let highTemp = data.daily[i].temp.max;
        $(cardId + " #highLowTemp").html(lowTemp + "°F / " + highTemp + "°F");
        console.log(data.daily[i].temp)
        // Feels Like
        let feelsLike = data.daily[i].feels_like.day;
        $(cardId + " #feelsLike").html(feelsLike + "%");
        console.log(data.daily[i].feels_like)
        // Humidity
        let humidity = data.daily[i].humidity;
        $(cardId + " #humidity").html(humidity + "°F");
        console.log(data.daily[i].humidity)
        // Wind
        let wind = data.daily[i].wind_speed;
        $(cardId + " #wind").html(wind + " MPH");
        console.log(data.daily[i].wind_speed)
        // Pressure
        let pressure = data.daily[i].pressure;
        $(cardId + " #pressure").html(pressure + " mBAR");
        console.log(data.daily[i].pressure)
    }
});

/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}




