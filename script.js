document.getElementById('bigButton').addEventListener('click', function() {
    const light = document.getElementById('light');
    const button = document.getElementById('bigButton');

    // Turn on the light
    if (light.style.backgroundColor !== 'yellow') {
        light.style.backgroundColor = 'yellow';
        button.disabled = true; // Disable the button

        // Call the tapButton function to simulate the arm tapping the button to turn off the light
        tapButton();
    }
});

function tapButton() {
    const arm = document.getElementById('arm');
    const light = document.getElementById('light');
    const button = document.getElementById('bigButton');


    // Randomize the speed of the arm movement
    const randomSpeed = Math.random() * 1 + 0.1; // Random value between 0.5s and 1.5s
    arm.style.transitionDuration = `${randomSpeed}s`;

    // Move the arm down to tap the button
    arm.style.top = '-75px';

    // After the arm reaches the button, toggle the light and move the arm back up
    setTimeout(() => {
        light.style.backgroundColor = '#ccc'; // Turn off the light
        arm.style.top = '-200px'; // Move the arm back up
        button.disabled = false; // Enable the button again
    }, randomSpeed * 1000); // Use the same random speed for the timeout
}