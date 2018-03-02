$(document).ready(function(){

// Gallery images
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


// Map
let map = new GMaps({
  div: '.map',
  lat: 43.675,
  lng: -79.445,
  zoom: 14
});

map.addMarker({
    lat: 43.6741299,
    lng: -79.4458869,
    title: 'Toronto',
    infoWindow: {
        content: "<strong>Catherine's</strong> at 55 Peterborough Ave"
      }
  });
  
});