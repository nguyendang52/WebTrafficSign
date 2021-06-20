<?php
require("DBController.php");
$dbController = new DBController();
$sql = "SELECT longitude, latitude, url, name From Location, TrafficSign Where Location.idTrafficSign=TrafficSign.id";
$result = $dbController->runQuery($sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #map {
            height: 100%;
        }
        html,
        body {
            height: 100%;
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6NQb8ELw_Ln4_eaHSxtfgQNpXgtZHpFg&callback=initMap&libraries=&v=weekly" async></script>
    <script>
        function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
                center: new google.maps.LatLng(16.047079, 108.206230),
                zoom: 16,
                mapId: 'e0dd5bf2ed09d4ed'
            });

            <?php
            if (mysqli_num_rows($result) > 0) {

                while ($row = mysqli_fetch_assoc($result)) {
            ?>
                    const icon = {
                        url: <?php echo $row["url"] ?>, // url
                        scaledSize: new google.maps.Size(20, 20), // scaled size
                        origin: new google.maps.Point(0, 0), // origin
                        anchor: new google.maps.Point(0, 15) // anchor
                    };
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(<?php echo $row["latitude"]; ?>, <?php echo $row["longitude"]; ?>),
                        map: map,
                        icon: icon,
                    });
                    const infowindow = new google.maps.InfoWindow({
                        content: '<h2><?php echo $row["name"]; ?></h2> ',
                    });
                    marker.addListener('click', () => {
                        infowindow.open({
                            anchor: marker,
                            map,
                            shouldFocus: false,
                        });

                    });
            <?php
                }
            }
            ?>
            map.addListener("center_changed", () => {
                window.setTimeout(() => {
                    map.panTo(marker.getPosition());
                }, 3000);
            });
        }
    </script>
</body>

</html>