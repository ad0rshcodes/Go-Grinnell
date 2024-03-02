import rideData from '../data/rideData.json';

const { from, to } = rideData;

function capitalizeEveryWord(string) {
  return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

let estimatedPrice = 55; // Default price
let driverTimeValue = 40; 
let gasValue = 15;

if (from.toLowerCase().includes("airport") || to.toLowerCase().includes("airport")) {
    estimatedPrice = 68.11;
    driverTimeValue = 42.90; 
    gasValue = 25.21;
} else if (from.toLowerCase().includes("arena") || to.toLowerCase().includes("arena")) {
    estimatedPrice = 74.13;
    driverTimeValue = 44.88; 
    gasValue = 29.25;
}

const mapHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Display navigation directions</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css" rel="stylesheet">
  <style>
    body { margin: 0; padding: 0; }
    #map { position: absolute; top: 15%; bottom: 5%; width: 90%; left: 5%; right: 5%; height: 80vh; }
    .map-overlay { position: absolute; top: 10px; left: 10px; }
    .instructions { position: absolute; top: 10px; right: 10px; background-color: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .heading { text-align: center; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="heading">
  <h1 style="text-align: center; margin-bottom: 20px; color: #333 !important;">Directions from ${capitalizeEveryWord(from)} to ${capitalizeEveryWord(to)}</h1>
  <p stlye ="text-align: center; margin-bottom: 20px; color: #666 !important;">Estimated Price: $${estimatedPrice} | Driver Time Value: $${driverTimeValue} | Gas Value: $${gasValue}</p>
  </div>
  <div id="map"></div>
  <script src="https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.js"></script>
  <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.2.0/mapbox-gl-directions.js"></script>
  <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.2.0/mapbox-gl-directions.css" type="text/css">
  <script>
    mapboxgl.accessToken = 'pk.eyJ1IjoiamgxOTQyIiwiYSI6ImNsdDZjZWJrdTBhZGQycXA2aHczYWZ6cXAifQ.jgEwffkeNPLjIQ6vAah11w';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-92.7232, 41.7434],
        zoom: 13
    });

    map.on('load', function() {
        map.resize();
    });

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        profile: 'mapbox/driving',
        alternatives: false,
        geocoder: {
            language: 'en'
        },
        origin: "${rideData.from}",
        destination: "${rideData.to}",
        interactive: true,
        flyTo: false,
        overview: false
    });

    map.addControl(directions, 'top-left');

    setTimeout(function() {
        directions.setOrigin("${rideData.from}");
        directions.setDestination("${rideData.to}");
    }, 1000); //
  </script>
</body>
</html>
`;

export default mapHtml;
