// Store our API endpoint as queryUrl.
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson";

// Perform a GET request to the query URL.
d3.json(queryUrl).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});

function createFeatures(earthquakeData) {
  // Function to determine marker size based on magnitude
  function markerSize(magnitude) {
    return magnitude * 4;  // Adjust the multiplier as needed for appropriate marker size
  }

  // Function to determine marker colour based on depth of earthquake
  function markerColor(depth) {
    return depth > 90 ? "#4B0082" :   // Dark purple
           depth > 70 ? "#800080" :   // Purple
           depth > 50 ? "#8B008B" :   // Dark magenta
           depth > 30 ? "#9932CC" :   // Dark orchid
           depth > 10 ? "#BA55D3" :   // Medium orchid
                        "#FF8C00";    // Dark orange
  }

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  let earthquakes = L.geoJSON(earthquakeData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: markerSize(feature.properties.mag),
        fillColor: markerColor(feature.geometry.coordinates[2]),
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      });
    },
    onEachFeature: function (feature, layer) {
      const date = new Date(feature.properties.time);
      const formattedDate = date.toLocaleString("en-US", { timeZone: "Australia/Sydney" });

      layer.bindPopup(`<h3>${feature.properties.place}</h3><hr>
                       <p>Magnitude: ${feature.properties.mag}</p>
                       <p>Depth: ${feature.geometry.coordinates[2]} km</p>
                       <p>${formattedDate}</p>`);
    }
  });

  // Send our earthquakes layer to the createMap function.
  createMap(earthquakes);
}

function createMap(earthquakes) {
  // Create the base layers.
  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object.
  let baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

  // Create an overlay object to hold our overlay.
  let overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load.
  let myMap = L.map("map", {
    center: [-20, 80], // Centered over the Indian Ocean
    zoom: 3,
    layers: [street, earthquakes]
  });

  // Adding legend to the map
  let legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    let grades = [0, 10, 30, 50, 70, 90];
    let colors = [
      "#FF8C00", // Dark orange
      "#BA55D3", // Medium orchid
      "#9932CC", // Dark orchid
      "#8B008B", // Dark magenta
      "#800080", // Purple
      "#4B0082"  // Dark purple
    ];

    // Add the header of the legend
    div.innerHTML = "<h4>Earthquake Depth</h4>";

    // Loop through depth intervals and generate a label with a colored square for each interval
    for (let i = 0; i < grades.length; i++) {
      div.innerHTML +=
        '<i style="background:' + colors[i] + '"></i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + (grades[i + 1] - 1) + ' km<br>' : '+ km');
    }

    return div;
  };

  // Adding the legend to the map
  legend.addTo(myMap);

  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}
