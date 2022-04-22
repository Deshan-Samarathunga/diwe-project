//Map
mapboxgl.accessToken = 'pk.eyJ1IjoiZGVzaGFuLXNhbWFyYXRodW5nYSIsImEiOiJja3VqeTM3dWEzMnY2MndxbDExanhraHZsIn0.Mx7KlWVI_qC9WcyHVRkdlQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [79.98585092039116,7.098883823566155],
    zoom:2

});

//close nav collapse when click outside
$(document).ready(function () {
    $(document).click(function () {
        // if($(".navbar-collapse").hasClass("in")){
        $('.navbar-collapse').collapse('hide');
        // }
    });
});

/* ==========================carousel */
$('#recipeCarousel').carousel({
    interval: 10000
})

$('.carousel .carousel-item').each(function () {
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});


//========================animated favicon
var favicon_images = [
    'img/favicon/grow green (1).gif',
    'img/favicon/grow green (2).gif',
    'img/favicon/grow green (3).gif',
    'img/favicon/grow green (4).gif',
    'img/favicon/grow green (5).gif',
    'img/favicon/grow green (6).gif',
    'img/favicon/grow green (7).gif',
    'img/favicon/grow green (8).gif',
    'img/favicon/grow green (9).gif',
    'img/favicon/grow green (10).gif',
    'img/favicon/grow green (11).gif',
    'img/favicon/grow green (12).gif',
    'img/favicon/grow green (13).gif',
    'img/favicon/grow green (14).gif',
    'img/favicon/grow green (15).gif',
    'img/favicon/grow green (16).gif',
    'img/favicon/grow green (17).gif',
    'img/favicon/grow green (18).gif',
    'img/favicon/grow green (19).gif',
    'img/favicon/grow green (20).gif',
    'img/favicon/grow green (21).gif',
    'img/favicon/grow green (22).gif',
    'img/favicon/grow green (23).gif',
    'img/favicon/grow green (24).gif',
    'img/favicon/grow green (25).gif',
    'img/favicon/grow green (26).gif',
    'img/favicon/grow green (27).gif',
    'img/favicon/grow green (28).gif',
    'img/favicon/grow green (29).gif',
    'img/favicon/grow green (30).gif',
    'img/favicon/grow green (31).gif',
    'img/favicon/grow green (32).gif',
    'img/favicon/grow green (33).gif',
    'img/favicon/grow green (34).gif',
    'img/favicon/grow green (35).gif',
    'img/favicon/grow green (36).gif',
    'img/favicon/grow green (37).gif',
    'img/favicon/grow green (38).gif',
    'img/favicon/grow green (39).gif',
    'img/favicon/grow green (40).gif',
    'img/favicon/grow green (41).gif',
    'img/favicon/grow green (42).gif',
    'img/favicon/grow green (43).gif',
    'img/favicon/grow green (44).gif'

],
    image_counter = 0;
setInterval(function () {
    if (document.querySelector("link[rel='icon']") !== null)
        document.querySelector("link[rel='icon']").remove();
    if (document.querySelector("link[rel='shortcut icon']") !== null)
        document.querySelector("link[rel='shortcut icon']").remove();

    document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

    if (image_counter == favicon_images.length - 1)
        image_counter = 0;
    else
        image_counter++;
}, 10);


//mouse btn pressed outline fix-->
$(".btn-primary").mouseup(function () {
    $(this).blur();
})

//close modal when press button
$('#staff login').click(function() {
    $('#login').modal('hide');
});


//When scrolling navbar appearance
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.background = "#3a5738";
        document.getElementById("navbar").style.boxShadow = "0px 8px 8px -6px rgba(0,0,0,.5)";
    } else {
        document.getElementById("navbar").style.background = "";
        document.getElementById("navbar").style.boxShadow = "";
    }
}
