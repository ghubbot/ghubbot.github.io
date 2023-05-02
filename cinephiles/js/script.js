
// Add event on multiple items

const addEventOnElements = function (elements, eventType, callback) {
    for (const elem of elements) elem.addEventListener(eventType, callback);
}

// Toggle search option for mobile

const searchBox = document.getElementById('search-box');


function searchToggle() {
    searchBox.classList.toggle("active");
};