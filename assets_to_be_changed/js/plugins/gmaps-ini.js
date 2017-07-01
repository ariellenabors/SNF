function initMap() {
    var sportAndFunLocation = {lat: 42.454008, lng: -83.352397};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        scrollwheel: false,
        center: sportAndFunLocation
    });
    var marker = new google.maps.Marker({
        position: sportAndFunLocation,
        map: map
    });
}
//// https://developers.google.com/maps/documentation/javascript/examples/
//function initMap() {
//  var customMapType = new google.maps.StyledMapType([
//      {
//        stylers: [
//          {'saturation': -100},
//          {'lightness': 51},
//          {'visibility': 'simplified'}
//        ]
//      },
//      {
//        elementType: 'labels',
//        stylers: [{visibility: 'on'}]
//      },
//      {
//        featureType: 'water',
//        stylers: [{color: '#f7f4f4'}]
//      },
//      {
//        featureType: 'road.highway',
//        stylers: [{color: '#cc0033'}]
//      }
//    ], {
//      name: 'Unify Style'
//  });
//
//  var image = new google.maps.MarkerImage(
//  	'assets_to_be_changed/img/marker.png',
//  	new google.maps.Size(48,54),
//  	new google.maps.Point(0,0),
//  	new google.maps.Point(24,54)
//  	);
//
//  var customMapTypeId = 'custom_style';
//
//  var map = new google.maps.Map(document.getElementById('map'), {
//    zoom: 12,
//    scrollwheel: false,
//    center: {lat: 42.454008, lng: -83.352397},  // Sport-N-Fun
//    mapTypeControlOptions: {
//      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
//    }
//  });
//
//  var infowindow = new google.maps.InfoWindow;
//  infowindow.setContent('<b>Sport-N-Fun</b>');
//
//  var marker = new google.maps.Marker({
//  	map: map,
//  	clickable: false,
//  	icon: image,
//  	position: {lat: 42.454008, lng: -83.352397}
//  });
//
//  map.mapTypes.set(customMapTypeId, customMapType);
//  map.setMapTypeId(customMapTypeId);
//}
