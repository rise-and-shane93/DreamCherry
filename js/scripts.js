//Generate Navbar brand logo based on user agent

/* If the user is accessing the site on a mobile device, the navbar brand 
will only be the circular logo. However, if the user is on a laptop or desktop,
then the navbar brand will have both the circular logo and company name.
*/

var navbarBrand = document.querySelector('.navbar-brand');
var logoImage = document.createElement('img');
logoImage.className = 'logo-image';

if ( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) 
    {
    logoImage.src = 'images/logoCircle.png';
} else {
    logoImage.src = 'images/logo.png';
}

navbarBrand.appendChild(logoImage);

//smooth scrolling
var $upArrow = $('.up-arrow');

$(document).ready(function() {
    $(window).scroll(function(event) {
        $upArrow.css('opacity', '0');
        if ($(this).scrollTop() > 200) {
            $upArrow.css('opacity', '1').fadeIn(1000);
        } else {
            $upArrow.css('opacity', '0').fadeOut();
        }
    });
});

$upArrow.click(function() {
    $('html, body').animate({scrollTop: 0}, 1000);
    return false;
});

//side menu collapse
/* This function opens/closes the side menu. The menu is closed by default
but if you click to open it, the symbol will switch to pointing left and 
the width will expand. */

var $buttonCollapse = $('.menu-collapse button i');
var $buttonCollapseDiv = $('.menu-collapse');
var $sideMenuInner = $('#side-menu-inner');
var $sideMenuContent = $('.newsletter-menu, .font-selection');

//sets the initial width and display of the inner menu to 0 and none
$sideMenuInner.css("width" , "0px");
$sideMenuContent.fadeOut().hide();

/* on click, the article will expand to full size, the content will come into view
and the arrow will change direction to indicate that the user can close the menu */
$buttonCollapseDiv.click(function() {
    if ($buttonCollapse.hasClass("fa-caret-right")) {
        $sideMenuInner.animate({width: '300' + 'px'}, 800);
        $sideMenuContent.delay(800).show(100).fadeIn(1000);
        $buttonCollapse.toggleClass('fa-caret-right fa-caret-left');
    } else {
        $sideMenuContent.fadeOut(100).hide(100);
        $sideMenuInner.animate({width: '0' + "px"}, 800);
        //$weatherArtInner.hide(100);
        $buttonCollapse.toggleClass('fa-caret-right fa-caret-left');
    }
});

//Change font-size
/* There are 3 buttons in the side menu. Upon click, the function attached to that
button element will adjust the size accordingly */

var newsletter = document.querySelector('#newsletterMain');

function decreaseFont() {
    newsletter.style.fontSize = 'smaller';
}

function normalFont() {
    newsletter.style.fontSize = '1rem';
}

function increaseFont() {
    newsletter.style.fontSize = 'larger';
}

//Change page sections
/*Depending on which section you click on in the side menu, the page will smooth
scroll to the selected section.*/

var $sectionList = $('.section-list li');
var $section1 = $('#section1');
var $section2 = $('#section2');
var $section3 = $('#section3');
var $section4 = $('#section4');

$sectionList.click(function(e) {
    if ($(event.target).hasClass('section1')) {
        $('html, body').animate({
            scrollTop: $section1.offset().top
        }, 600);
    } else if ($(event.target).hasClass('section2')) {
        $('html, body').animate({
            scrollTop: $section2.offset().top
        }, 600);
    } else if ($(event.target).hasClass('section3')) {
        $('html, body').animate({
            scrollTop: $section3.offset().top
        }, 600);
    } else {
        $('html, body').animate({
            scrollTop: $section4.offset().top
        }, 600);
    }
});