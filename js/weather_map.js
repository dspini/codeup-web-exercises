$(document).ready(function() {
    "use strict"; // open tag

    // Weathermap API jQuery
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: openWeathermapKey,
        lat: 29.4241219,
        lon: -98.4936282,
        units: "imperial",
    }).done(function (data) {
        console.log(data);

        // Data Weathermap API JS
        for (var i = 0; i < 5; i++) {
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
            console.log(data.daily[i].pressure);
        }
    });

    // Mapbox API JS
    var accessToken = mapboxKey;
    mapboxgl.accessToken = accessToken;
    mapboxgl.accessToken = mapboxKey;
    let map = new mapboxgl.Map({
        container: "mapboxgl-canvas-container",
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 12,
        center: [-98.4936282, 29.4241219]
    });
    // Mapbox API Controls
    map.addControl(new mapboxgl.NavigationControl());

    // Weathermap API Icons JS
    let icon = "http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@4x.png";
    for (var i = 0; i < 5; i++) {
        let cardId = "#card" + i
        icon = "http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@4x.png";
        $(cardId + " #icon").html(icon);
        console.log(data.daily[i].weather.icon);
    }

    // Navigation Search Input JS
    function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
            }).then(function(data) {
                return data.features[0].center;
            });
    }

}); // close tag