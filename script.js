function n1function() {
alert("Not avalible")
}
function n2function() {
alert("Nothing here")
}
function n3function() {
alert("Not working")
}
function n4function() {
alert("I'm a student")
}
function n5function() {
alert("17 year old")
}
function n6function() {
alert("My email ws47389stu.alaschools.org")
}
function n7function() {
alert("Email has been sent")
}
function n8function() {
alert("Can't reach the number you've been trying to reach")
}
function n9function() {
alert("RICK ROLL")
}
function n10function() {
alert("Food has been order")
}
function n11function() {
alert("Auto bill on")
}
function n12function() {
alert("Tip has been sent")
}

var map;
google.maps.event.addDomListener(window, "load", function () {
var map = new google.maps.Map(document.getElementById("map_div"), {
    center: new google.maps.LatLng(33.2209406,-111.5729179),
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var infoWindow = new google.maps.InfoWindow();
  function createMarker(options, html) {
    var marker = new google.maps.Marker(options);
    if (html) {
      google.maps.event.addListener(marker, "click", function () {
        infoWindow.setContent(html);
        infoWindow.open(options.map, this);
      });
    }
    return marker;
  }
var marker1 = createMarker({
    position: new google.maps.LatLng(33.2209406,-111.5729179),
    map: map
  }, "<h1>American Leadership Academy</h1><p>Come here for more information</p>");

});