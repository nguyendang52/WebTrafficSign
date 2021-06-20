const express = require('express')
const mysql = require('mysql')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'Map'
});
function get_info(callback){
  var sql = "SELECT * FROM Location";
  connection.query(sql, function(err, results){
        if (err){ 
          throw err;
        }
        stuff_i_want = results;  // Scope is larger than function  
        return callback(results);
        
});
}
let stuff_i_want = get_info(function(result){
  stuff_i_want = result;
  console.log(stuff_i_want);
});
 /*connection.query("SELECT * FROM Location", function (err, result, fields) {
    if (err) throw err;
    for (let i = 0; i < result.length; i++) {
      let x = result[i].idTrafficSign;
      x = x + 1
      const sql = 'SELECT * FROM TrafficSign WHERE id = ?';
      connection.query(sql, [x], function (err, result1) {
        if (err) throw err;
        let lat = result[i].latitude;
        let long = result[i].longitude;
        let url = result1[i].url.toString();
        console.log(lat, long, url)
      });
    }
  });*/
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(16.047079, 108.206230),
    zoom: 16,
    mapId: '2506a59ed508dbc'
  });
  setMarkers(map);
  
}
function setMarkers(map){
  const icon = {
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Road-sign-no-entry.svg", // url
    scaledSize: new google.maps.Size(20, 20), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 15) // anchor
};
  
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(16.0620303, 108.2138545),
    map: map,
    icon: icon,
  });
  
}


/*
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(16.047079, 108.206230),
    zoom: 16,
    
  });
  const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  const icons = {
    parking: {
      icon: iconBase + "parking_lot_maps.png",
    },
    library: {
      icon: iconBase + "library_maps.png",
    },
    info: {
      icon: iconBase + "info-i_maps.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(-33.91721, 151.2263),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91539, 151.2282),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91747, 151.22912),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.9191, 151.22907),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91725, 151.23011),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91872, 151.23089),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91784, 151.23094),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91682, 151.23149),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.9179, 151.23463),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91666, 151.23468),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.916988, 151.23364),
      type: "info",
    },
    {
      position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
      type: "parking",
    },
    {
      position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
      type: "library",
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}*/

/*const express = require('express')
const mysql = require('mysql')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'Map'
});
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM Location", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});*/

//usage




