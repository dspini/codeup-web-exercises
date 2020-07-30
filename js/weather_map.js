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
    mapboxgl.accessToken = mapboxKey
    var map = new mapboxgl.Map({
        container: 'map', // Container ID
        style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
        center: [-122.25948, 37.87221], // Starting position [lng, lat]
        zoom: 12, // Starting zoom level
    });

    var marker = new mapboxgl.Marker() // Initialize a new marker
        .setLngLat([-122.25948, 37.87221]) // Marker [lng, lat] coordinates
        .addTo(map); // Add the marker to the map

    var geocoder = new MapboxGeocoder({ // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: false, // Do not use the default marker style
        placeholder: 'Search for places in Berkeley', // Placeholder text for the search bar
        bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
        proximity: {
            longitude: -122.25948,
            latitude: 37.87221
        } // Coordinates of UC Berkeley
    });

    // Add the geocoder to the map
    map.addControl(geocoder);

    // After the map style has loaded on the page,
    // add a source layer and default styling for a single point
    map.on('load', function() {
        map.addSource('single-point', {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: []
            }
        });

        map.addLayer({
            id: 'point',
            source: 'single-point',
            type: 'circle',
            paint: {
                'circle-radius': 10,
                'circle-color': '#448ee4'
            }
        });

        // Listen for the `result` event from the Geocoder
        // `result` event is triggered when a user makes a selection
        // Add a marker at the result's coordinates
        geocoder.on('result', function(ev) {
            map.getSource('single-point').setData(ev.result.geometry);
        });
    });
    // Mapbox API Controls
    //map.addControl(new mapboxgl.NavigationControl());

    // Weathermap API Icons JS
    // let icon = "http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@4x.png";
    // for (var i = 0; i < 5; i++) {
    //     let cardId = "#card" + i
    //     icon = "http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@4x.png";
    //     $(cardId + " #icon").html(icon);
    //     console.log(data.daily[i].weather.icon);
    // }

    // Navigation Search Input JS
    // function geocode(search, token) {
    //     var baseUrl = 'https://api.mapbox.com';
    //     var endPoint = '/geocoding/v5/mapbox.places/';
    //     return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
    //         .then(function(res) {
    //             return res.json();
    //         }).then(function(data) {
    //             return data.features[0].center;
    //         });
    // }

}); // close tag