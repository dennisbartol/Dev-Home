document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.l-header');
    var scrollPosition = window.scrollY;

    function addRemoveScrolledClass() {
        scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Add the scroll event-listener
    window.addEventListener('scroll', addRemoveScrolledClass);

    // Call the function once to set initial state
    addRemoveScrolledClass();
});
