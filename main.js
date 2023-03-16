/*
    Change Website Color
*/

// Add first class from local storage
// we add 'red' class if localStorage was null it give it a this class value
document.body.classList.add(localStorage.getItem('pageColor') || 'red'); 

// get all li inside class color switcher  (nodes values)
var element = document.querySelectorAll('.color-switcher li')

// get all classes inside li to add it in body for changing color
var classesList = [];

// Loop on Elements
for (var i = 0; i < element.length; i++) {

    // Get Classes List
    classesList.push(element[i].getAttribute('data-color'));

    // Click Event
    element[i].addEventListener('click', function () {

        // Remove All classes before adding new class
        document.body.classList.remove(...classesList); // => same code document.body.classList.remove('purple black green ');

        // Add class to body 
        document.body.classList.add(this.getAttribute("data-color")); 

        // Add Data to Local Storage to stay in same color whenever reload page
        localStorage.setItem('pageColor', this.getAttribute("data-color"));

    }, false);  // false means that i want just click nothing more
}

