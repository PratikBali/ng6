// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    "use strict";
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.722330, -73.992905), // You Address Here

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles:
            [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="mapdark" seen below in the <body>
    var mapElement = document.getElementById('mapdark');

    // Create the Google Map using out element and options defined above
    var mapdark = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/misc/map-marker-light.png';
    var myLatLng = new google.maps.LatLng(40.722330, -73.992905); // You Address Here
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: mapdark,
        icon: image
    });
}