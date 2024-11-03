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

    // Move the arm down to tap the button
    arm.style.top = '50px';

    // After the arm reaches the button, toggle the light and move the arm back up
    setTimeout(() => {
        light.style.backgroundColor = '#ccc'; // Turn off the light
        arm.style.top = '-150px'; // Move the arm back up
        button.disabled = false; // Enable the button again
    }, 1000);
}