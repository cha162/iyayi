document.addEventListener("DOMContentLoaded", function () {
    // Get the envelope, letter, and open button elements
    var envelope = document.getElementById('envelope');
    var letter = document.getElementById('letter');
    var openButton = document.getElementById('openButton');

    // Add click event listener to toggle letter visibility
    envelope.addEventListener('click', function () {
        if (letter.style.display === 'none') {
            letter.style.display = 'block';
            openButton.style.display = 'none';
        }
    });

    // Add click event listener to the open button
    openButton.addEventListener('click', function () {
        letter.style.display = 'block';
        openButton.style.display = 'none';
    });
});
