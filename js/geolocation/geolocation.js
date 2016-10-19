function mapLocation(pos) {
    var status = document.getElementById('status');
    status.innerHTML = 'Found your location! Longitude: ' + pos.coords.longitude +
                  ' Latitude: ' + pos.coords.latitude;

    var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    var options = {
        zoom: 15,
        center: latlng,
        mapTypeControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "Your location"
    });
}

function geoError(error) {
    var status = document.getElementById('status');
    status.innerHTML = 'failed lookup ' + error.message;
}