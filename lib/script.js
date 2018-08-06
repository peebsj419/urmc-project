// Babel transpiled ES5 code from the ES6 code in the js folder 

'use strict';

var body = document.querySelector('body');
var modal = document.querySelector('.modal');
var closeModal = document.querySelector('.modal-close-icon');
var menu = document.querySelector('.menu-icon');
var nav = document.querySelector('.main-nav');
var close = document.querySelector('.close-icon');
var visited = localStorage.getItem('visited');

// Open modal only on first visit. Not something I've done before admittedly. This works fine but someone else on the team may have a different solution.
localStorage.setItem('visited', false);

if (!visited) {
    modal.classList.add('animate-in');
}

// Close modal when close button clicked

var closeModalClick = function closeModalClick() {
    modal.classList.add('animate-out');
    localStorage.setItem('visited', true);

    setTimeout(function () {
        modal.style.display = 'none';
    }, 500);
};

// Open menu when menu button clicked

var openClick = function openClick() {
    if (nav.classList.contains('slide-in')) {
        nav.classList.remove('slide-in');
        body.classList.remove('no-scroll');
    } else {
        nav.classList.add('slide-in');
        body.classList.add('no-scroll');
    }
};

// Close menu when close button clicked

var closeClick = function closeClick() {
    modal.classList.add('animate-out');
};

// Fire click events

menu.addEventListener('click', openClick, false);
close.addEventListener('click', closeClick, false);
closeModal.addEventListener('click', closeModalClick, false);

// Close menu when clicking away from menu

window.addEventListener('click', function (event) {
    if (nav.classList.contains('slide-in') && event.target != nav && event.target != menu) {
        nav.classList.remove('slide-in');
        body.classList.remove('no-scroll');
    }
}, false);