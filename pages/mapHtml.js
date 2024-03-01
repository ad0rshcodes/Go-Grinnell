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
         #map { position: absolute; top: 25%; bottom: 0; width: 95%; height: 70vh; }
         .map-overlay { position: absolute; top: 10px; left: 10px; z-index: 1; }
      </style>
   </head>
   <body>
      <div id="map"></div>
      <div class="map-overlay">
         <!-- Add any overlay content here -->
      </div>
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
         
         map.addControl(
             new MapboxDirections({
                 accessToken: mapboxgl.accessToken
             }),
             'top-left'
         );
      </script>
   </body>
</html>
`;

export default mapHtml;
