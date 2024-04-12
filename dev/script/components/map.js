window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: '29c98d5d2f5a90ff',
        center: latLng,
        zoom: mapZoom,
        streetViewControl: false,
        zoomControl: false,
        disableDefaultUI: true,
        scrollwheel: false,
    });

    const markerView = new google.maps.marker.AdvancedMarkerView({
        map,
        position: latLng,
        content: mapMarker,
    });

    google.maps.event.addListener(markerView, 'click', function () {
        window.open(mapMarker.href, mapMarker.target);
    });
}

window.initMap = initMap;