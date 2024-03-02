import rideData from '../data/rideData.json';

const { from, to } = rideData;

function capitalizeEveryWord(string) {
  return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
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
    #map { position: absolute; top: 10%; bottom: 10%; width: 80%; left: 10%; right: 10%; height: 80vh; }
    .map-overlay { position: absolute; top: 10px; left: 10px; }
    .instructions { position: absolute; top: 10px; right: 10px; background-color: white; padding: 10px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .heading { text-align: center; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="heading">
  <h1 style="text-align: center;">Directions from ${capitalizeEveryWord(from)} to ${capitalizeEveryWord(to)}</h1>
  </div>
  <div id="map"></div>
  <script src="https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.js"></script>
  <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.2.0/mapbox-gl-directions.js"></script>
  <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.2.0/mapbox-gl-directions.css" type="text/css">
  <script>
    mapboxgl.accessToken = 'pk.eyJ1IjoiamgxOTQyIiwiYSI6ImNsdDZjZWJrdTBhZGQycXA2aHczYWZ6cXAifQ.jgEwffkeNPLjIQ6vAah11w';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-92.7232, 41.7434],
        zoom: 13
    });

    map.on('load', function() {
        map.resize();
      });

      // Get directions
      const directions = new MapboxDirections({
       accessToken: mapboxgl.accessToken,
       profile: 'mapbox/driving', // You can choose other profiles like walking or cycling
       alternatives: false, // If you don't want alternative routes
         geocoder: {
             language: 'en' // Language for directions
         },
       origin: "${rideData.from}",
       destination: "${rideData.to}", 
       interactive: true,
       flyTo: false, // Prevent the map from automatically flying to the route
       overview: false // Disable the overview map showing the entire route
      });
        

        // Show directions
      map.addControl(directions, 'top-left');

        // Trigger route calculation
      setTimeout(function() {
       directions.setOrigin("${rideData.from}");
       directions.setDestination("${rideData.to}");
      }, 1000); //

  </script>
</body>
</html>
`;

export default mapHtml;
