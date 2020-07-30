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
            // Icons
            let icon = `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@4x.png`;
            for (var i = 0; i < 5; i++) {
            let cardId = "#card" + i
                icon = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@4x.png`;
                $(cardId + " #icon img").attr("src", icon);
                    console.log(data.daily[i].weather.icon);
            }
        }
    });

    // Mapbox API JS
    mapboxgl.accessToken = mapboxKey
    var map = new mapboxgl.Map({
        container: 'map', // Container ID
        style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
        center: [-98.4936282, 29.4241219], // Starting position [lng, lat]
        zoom: 12, // Starting zoom level
    });

    var marker = new mapboxgl.Marker() // Initialize a new marker
        .setLngLat([-98.4936282, 29.4241219]) // Marker [lng, lat] coordinates
        .addTo(map); // Add the marker to the map

    var geocoder = new MapboxGeocoder({ // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: false, // Do not use the default marker style
        placeholder: 'Search for places in Berkeley', // Placeholder text for the search bar
        flyTo: true
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
    geocoder.on('results', function(ev) {
    // map.getSource('single-point').setData(ev.result.geometry);
        console.log(ev);
        });
    });

}); // close tag