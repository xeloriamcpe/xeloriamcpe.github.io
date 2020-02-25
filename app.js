/*Nav responsive*/
var nav_icon = document.getElementById('nav-icon');
var nav_menu = document.getElementById('nav-menu');
var overlay = document.getElementById('overlay');
var cross = 0

nav_icon.addEventListener('click', function (e) {
    e.preventDefault();
    if (cross === 0) {
        nav_menu.classList.add('nav-active');
        overlay.classList.add('overlay-active');
        cross = 1;
    } else {
        nav_menu.classList.remove('nav-active');
        overlay.classList.remove('overlay-active');
        cross = 0;
    };

});

/*Menu*/
overlay.addEventListener('click', function (e) {
    e.preventDefault();
    nav_menu.classList.remove('nav-active');
    overlay.classList.remove('overlay-active')
});


var loaderOverlay = document.getElementById('loader-overlay');

window.addEventListener('load', function () {
    loaderOverlay.style.display = 'none';
})

var overlay = document.getElementById('overlay');
var cross = 0;

/*Top button*/

//Scroll to top

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myScroll")
            .style.display = "block";
    } else {
        document.getElementById("myScroll")
            .style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*Change image*/

setInterval(function(){/*Image 1*/
    var one = document.getElementById('image');
    one.src = 'image/logo_xeloria.jpg';}, 1250);
                 