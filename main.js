const toggleButton = document.getElementById('toggle-icon');
const menu = document.querySelector('.menu');
const moonIcon = document.getElementById('moon-icon');
const cross=document.getElementById('cross');
toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
   
   
    moonIcon.classList.toggle('active');
});

var icon=document.getElementById('moon-icon');

icon.onclick=function(){
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        icon.className = "fas fa-sun"; // Update the class name
        icon.style.color = "#BCBAC4"; 
        icon.style.padding=".45rem"// Update the color
    } else {
        icon.className = "fas fa-moon"; // Update the class name
        icon.style.color = "#6D6A7C"; 
        icon.style.padding=".3rem .5rem"// Update the color
      }
}


var darkThemeIcon = document.getElementById('dark-theme-icon');
var toggleIcon = document.getElementById('toggle-icon');

darkThemeIcon.onclick = function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        darkThemeIcon.className = "fas fa-solid fa-sun"; // Update the class name
        darkThemeIcon.style.color = "#BCBAC4"; 
        darkThemeIcon.style.padding = ".45rem"; // Update the padding
    } else {
        darkThemeIcon.className = "fas fa-solid fa-moon"; // Update the class name
        darkThemeIcon.style.color = "#6D6A7C"; 
        darkThemeIcon.style.padding = ".3rem .5rem"; // Update the padding
    }
}

// Adjust the positioning of the dark theme icon on smaller screens
function adjustDarkThemeIconPosition() {
    if (window.innerWidth <= 768) { // You can adjust the breakpoint as needed
        darkThemeIcon.style.marginRight = "10px"; 
        moonIcon.style.display="none";// Example margin
    } else {
        darkThemeIcon.style.marginRight = "0"; // Reset margin
    }
}

// Call the function on page load and when the window is resized
adjustDarkThemeIconPosition();
window.addEventListener('resize', adjustDarkThemeIconPosition);