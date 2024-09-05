// scroll Selection
let Sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.service-container,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

// typed js
var typed3 = new Typed('.front', {
    strings: [' <i>Frontend Developer!</i>', 'B.Tech Student', 'Nice person'],
    typeSpeed: 100,
    backSpeed: 100,
    smartBackspace: true, // this is a default
    loop: true
  });
  // Get the element containing the moving text
var textElement = document.getElementById("#front");
var currentColor = 0;

function updateColor() {
  // Change the text color using the style property
  textElement.style.color = "rgb(0, " + currentColor + ", 204)";

  // Increment the color value (adjust the increment for different effects)
  currentColor = (currentColor + 1) % 256;
}

// Call the updateColor function every 100 milliseconds
setInterval(updateColor, 100);
