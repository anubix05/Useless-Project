document.getElementById('bigButton').addEventListener('click', function() {
    const button = document.getElementById('bigButton');

    // Play the click sound
    clickSound.play();

    // Turn on the light
    if (button.style.backgroundColor !== 'orange') {
        button.style.backgroundColor = 'orange';
        button.disabled = true; // Disable the button

        // Call the tapButton function to simulate the arm tapping the button to turn off the light
        tapButton();
    }
});

// Define an array of custom speeds (in seconds)
const speeds = [0.7, 0.5, 1, 2.5, 0.5, 3, 0.3, 0.5];
let speedIndex = 0; // Initialize the index to keep track of the current speed

function tapButton() {
    const arm = document.getElementById('arm');
    const button = document.getElementById('bigButton');
    const turnOffSound = document.getElementById('turnOffSound');

    // Select the current speed from the array
    const currentSpeed = speeds[speedIndex];
    const numberOfSteps = 14; // Define the number of steps
    const numberOfSteps2 = 3; // Define the number of steps
    const stepDuration = currentSpeed / numberOfSteps; // Divide the total duration into steps
    const stepDuration2 = currentSpeed / numberOfSteps2; // Divide the total duration into steps
    // Increment the speed index and reset if it reaches the end of the array
    speedIndex = (speedIndex + 1) % speeds.length;

    if (currentSpeed === 3) {
        // Function to move the arm in steps
        function moveArmStep(step) {
            if (step <= numberOfSteps2) {
                arm.style.top = `${-170 + (step * (100 / numberOfSteps2))}px`; // Move the arm down in steps
                setTimeout(() => moveArmStep(step + 1), stepDuration2 * 2000);
            } else {
                // After the arm reaches the button, toggle the light and move the arm back up
                setTimeout(() => {
                    button.style.backgroundColor = '#ccc'; // Turn off the light
                    arm.style.top = '-150px'; // Move the arm back up
                    button.disabled = false; // Enable the button again
                    turnOffSound.play(); // Play the turn-off sound
                }, stepDuration * 50);
            }
        }

        // Start moving the arm in steps
        moveArmStep(1);
    }

    else if (currentSpeed === 2.5) {
        // Function to move the arm in steps
        function moveArmStep(step) {
            if (step <= numberOfSteps) {
                arm.style.top = `${-175 + (step * (110/ numberOfSteps))}px`; // Move the arm down in steps
                setTimeout(() => moveArmStep(step + 1), stepDuration * 1000);
            } else {
                // Pause for a moment before switching off the light
                setTimeout(() => {
                    button.style.backgroundColor = '#ccc'; // Turn off the light
                    arm.style.top = '-150px'; // Move the arm back up
                    button.disabled = false; // Enable the button again
                    turnOffSound.play(); // Play the turn-off sound
                }, 1000); // Pause for 1 second
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
            button.style.backgroundColor = '#ccc'; // Turn off the light
            arm.style.top = '-200px'; // Move the arm back up
            button.disabled = false; // Enable the button again
            turnOffSound.play(); // Play the turn-off sound
        }, currentSpeed * 2000);
    }


    else if (currentSpeed === 0.7) {
        // Move the arm normally without steps
        arm.style.transitionDuration = `${currentSpeed}s`;
        arm.style.top = '-75px';

        // After the arm reaches the button, toggle the light and move the arm back up
        setTimeout(() => {
            button.style.backgroundColor = '#ccc'; // Turn off the light
            arm.style.top = '-200px'; // Move the arm back up
            button.disabled = false; // Enable the button again
            turnOffSound.play(); // Play the turn-off sound
        }, currentSpeed * 1000);
    }


    else if (currentSpeed === 0.30) {
        // Function to move the arm down and up back and forth
        function moveArmBackAndForth(count) {
            if (count < 3) {
                // Move the arm down
                arm.style.transitionDuration = `${currentSpeed}s`;
                arm.style.top = '-100px';

                // Move the arm back up
                setTimeout(() => {
                    arm.style.top = '-170px';
                    setTimeout(() => moveArmBackAndForth(count + 1), currentSpeed * 800);
                }, currentSpeed * 1000);
            } else {
                // On the 4th time, move the arm down and turn off the light
                arm.style.transitionDuration = `${currentSpeed}s`;
                arm.style.top = '-75px';

                setTimeout(() => {
                    button.style.backgroundColor = '#ccc'; // Turn off the light
                    arm.style.top = '-200px'; // Move the arm back up
                    button.disabled = false; // Enable the button again
                    turnOffSound.play(); // Play the turn-off sound
                }, currentSpeed * 1000);
            }
        }

        // Start moving the arm back and forth
        moveArmBackAndForth(0);
    } 


    else if (currentSpeed === 2) {
        // Function to move the arm in steps
        function moveArmStep(step) {
            if (step <= numberOfSteps) {
                arm.style.top = `${-150 + (step * (150 / numberOfSteps))}px`; // Move the arm down in steps
                setTimeout(() => moveArmStep(step + 1), stepDuration * 1000);
            } else {
                // After the arm reaches the button, toggle the light and move the arm back up
                setTimeout(() => {
                    button.style.backgroundColor = '#ccc'; // Turn off the light
                    arm.style.top = '-200px'; // Move the arm back up
                    button.disabled = false; // Enable the button again
                    turnOffSound.play(); // Play the turn-off sound
                }, stepDuration * 1000);
            }
        }

        // Start moving the arm in steps
        moveArmStep(1);
    }


    else {
        // Move the arm normally without steps
        arm.style.transitionDuration = `${currentSpeed}s`;
        arm.style.top = '-75px';

        // After the arm reaches the button, toggle the light and move the arm back up
        setTimeout(() => {
            button.style.backgroundColor = '#ccc'; // Turn off the light
            arm.style.top = '-200px'; // Move the arm back up
            button.disabled = false; // Enable the button again
            turnOffSound.play(); // Play the turn-off sound
        }, currentSpeed * 600);
    }
}

// Mute/Unmute button functionality
const muteButton = document.getElementById('muteButton');
const muteIcon = document.getElementById('muteIcon');
muteButton.addEventListener('click', function() {
    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        muteIcon.src = 'sound.png'; // Change to mute icon
    } else {
        backgroundMusic.muted = true;
        muteIcon.src = 'mute.png'; // Change to unmute icon
    }
});



// Play the background music
backgroundMusic = document.getElementById('backgroundMusic');

setTimeout(() => {
    backgroundMusic.play();
}, 10000);

