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

// Define an array of custom speeds (in seconds)
const speeds = [0.35, 0.5, 0.5, 1, 1.5, 2.55, 2, 2.5, 3];
let speedIndex = 0; // Initialize the index to keep track of the current speed

function tapButton() {
    const arm = document.getElementById('arm');
    const light = document.getElementById('light');
    const button = document.getElementById('bigButton');

    // Select the current speed from the array
    const currentSpeed = speeds[speedIndex];
    const numberOfSteps = 14; // Define the number of steps
    const numberOfSteps2 = 2; // Define the number of steps
    const stepDuration = currentSpeed / numberOfSteps; // Divide the total duration into steps
    const stepDuration2 = currentSpeed / numberOfSteps2; // Divide the total duration into steps
    // Increment the speed index and reset if it reaches the end of the array
    speedIndex = (speedIndex + 1) % speeds.length;

    if (currentSpeed === 3) {
        // Function to move the arm in steps
        function moveArmStep(step) {
            if (step <= numberOfSteps2) {
                arm.style.top = `${-170 + (step * (100 / numberOfSteps2))}px`; // Move the arm down in steps
                setTimeout(() => moveArmStep(step + 1), stepDuration2 * 3000);
            } else {
                // After the arm reaches the button, toggle the light and move the arm back up
                setTimeout(() => {
                    light.style.backgroundColor = '#ccc'; // Turn off the light
                    arm.style.top = '-200px'; // Move the arm back up
                    button.disabled = false; // Enable the button again
                }, stepDuration * 50);
            }
        }

        // Start moving the arm in steps
        moveArmStep(1);
    }
    else if (currentSpeed === 2.55) {
        // Move the arm normally without steps
        arm.style.transitionDuration = `${currentSpeed}s`;
        arm.style.top = '-75px';

        // After the arm reaches the button, toggle the light and move the arm back up
        setTimeout(() => {
            light.style.backgroundColor = '#ccc'; // Turn off the light
            arm.style.top = '-200px'; // Move the arm back up
            button.disabled = false; // Enable the button again
        }, currentSpeed * 3000);
    }
    else if (currentSpeed === 1) {
        // Move the arm normally without steps
        arm.style.transitionDuration = `${currentSpeed}s`;
        arm.style.top = '-75px';

        // After the arm reaches the button, toggle the light and move the arm back up
        setTimeout(() => {
            light.style.backgroundColor = '#ccc'; // Turn off the light
            arm.style.top = '-200px'; // Move the arm back up
            button.disabled = false; // Enable the button again
        }, currentSpeed * 3000);
    }
    else if (currentSpeed === 2.5) {
        // Function to move the arm in steps
        function moveArmStep(step) {
            if (step <= numberOfSteps) {
                arm.style.top = `${-150 + (step * (150 / numberOfSteps))}px`; // Move the arm down in steps
                setTimeout(() => moveArmStep(step + 1), stepDuration * 1000);
            } else {
                // After the arm reaches the button, toggle the light and move the arm back up
                setTimeout(() => {
                    light.style.backgroundColor = '#ccc'; // Turn off the light
                    arm.style.top = '-200px'; // Move the arm back up
                    button.disabled = false; // Enable the button again
                }, stepDuration * 1000);
            }
        }

        // Start moving the arm in steps
        moveArmStep(1);
    }
    else if (currentSpeed === 1.5) {
        // Move the arm normally without steps
        arm.style.transitionDuration = `${currentSpeed}s`;
        arm.style.top = '-75px';

        // After the arm reaches the button, toggle the light and move the arm back up
        setTimeout(() => {
            light.style.backgroundColor = '#ccc'; // Turn off the light
            arm.style.top = '-200px'; // Move the arm back up
            button.disabled = false; // Enable the button again
        }, currentSpeed * 1000);
    }
    else {
        // Move the arm normally without steps
        arm.style.transitionDuration = `${currentSpeed}s`;
        arm.style.top = '-75px';

        // After the arm reaches the button, toggle the light and move the arm back up
        setTimeout(() => {
            light.style.backgroundColor = '#ccc'; // Turn off the light
            arm.style.top = '-200px'; // Move the arm back up
            button.disabled = false; // Enable the button again
        }, currentSpeed * 1000);
    }
}