
$(document).ready(function(){/* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: $('header').height()-$('#nav').height()
      }
});	

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top+20;
  $('body,html').animate({scrollTop:posi},700);
})

/* google maps */

// enable the visual refresh
google.maps.visualRefresh = true;

var map;
function initialize() {
 
 map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 2,
    center: {lat: 42.3, lng: -71.06}
    });

  map.data.loadGeoJson('https://raw.githubusercontent.com/bullocke/Landsat-Database/master/PRmap.geojson');

}

google.maps.event.addDomListener(window, 'load', initialize);


}
