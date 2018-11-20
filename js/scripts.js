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
