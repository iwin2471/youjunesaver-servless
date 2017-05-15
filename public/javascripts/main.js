var mySidenav = document.getElementById("mySidenav");
var myNav = document.getElementById('navigation');

$('#menu').sideNav({
    menuWidth: 250, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
});

window.onscroll = ()=>{
    if (document.body.scrollTop >= 150 ) {
        myNav.classList.remove("nav-transparent");
        myNav.classList.add("nav-colored");
    } else {
        myNav.classList.remove("nav-colored");
        myNav.classList.add("nav-transparent");

    }
};

$(document).ready(function(){
    $('.parallax').parallax();
});
