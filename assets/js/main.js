function initMap() {
    // Options
    var options = {
        zoom: 15,
        center: {
            lat: -25.4413569,
            lng: -49.2740054
        }
    }

    // Map
    var map = new google.maps.Map(document.getElementById('map'), options);

    //Click on map
    google.maps.event.addListener(map, 'click', function (event) {        
        addMarker({
            coords: event.latLng
        });
    });


    // Markers            
    var markers = [{
            coords: {
                lat: -25.437989,
                lng: -49.267722
            },
            content: '<div class="rating"><h3>Shopping Estação</h3> <div class="rating--star"><span></span><span></span><span></span></div></div>'
        },
        {
            coords: {
                lat: -25.434113,
                lng: -49.257068
            },
            content: '<div class="rating"><h3>Mercado Municipal</h3> <div class="rating--star"><span></span><span></span></div></div>'
        },
        {
            coords: {
                lat: -25.447798,
                lng: -49.276451
            },
            content: '<div class="rating"><h3>Arena da Baixada</h3> <div class="rating--star"><span></span></div></div>'
        }
    ];

    // Loop markers
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });

        // If has content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
            
            marker.addListener('mouseover', function () {
                infoWindow.open(map, marker);
            });

            marker.addListener('mouseout', function () {
                infoWindow.close();
            });
        }
    }
}