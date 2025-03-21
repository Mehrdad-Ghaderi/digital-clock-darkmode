// Utility function to select an element by its CSS selector
const $ = (selector) => document.querySelector(selector);

// DOM elements for the clock display (hour, minute, second, colon, and weekday)
const hour = $(".hour");
const colons = document.querySelectorAll(".colon");
const min = $(".min");
const sec = $(".sec");
const week = $(".week"); // Weekday element (for displaying the current day)
let showColon = true; // Boolean to toggle the visibility of the colon

// Initialize currentDay to the current day of the week
let currentDay = new Date().getDay(); // Get the current day (0 = Sunday, 1 = Monday, etc.)

/**
 * Updates the clock every half second (500ms).
 * - Toggles the visibility of the colon.
 * - Updates the hour, minute, and second values.
 * - Updates the active day of the week.
 */
function update() {
  showColon = !showColon; // Toggle colon visibility
  const now = new Date(); // Get the current date and time

  // Toggle the colon visibility based on the showColon flag
  colons.forEach((colon) => {
    if (showColon) {
      colon.classList.add("invisible");
    } else {
      colon.classList.remove("invisible");
    }
  });
  // Set the hour, minute, and second values in the clock
  hour.textContent = String(now.getHours()).padStart(2, "0"); // Format hour with leading zero
  min.textContent = String(now.getMinutes()).padStart(2, "0");
  sec.textContent = String(now.getSeconds()).padStart(2, "0");

  // Remove the "active" class from all weekday elements
  //   Array.from(week.children).forEach((element) => {
  //     element.classList.remove("active");
  //   });
  for (let i = 0; i < week.children.length; i++) {
    week.children[i].classList.remove("active");
  }

  // Set the "active" class to the current day of the week (0 = Sunday, 1 = Monday, etc.)
  week.children[now.getDay()].classList.add("active");
}

function updateWeek() {
  const now = new Date();
  const day = now.getDay();

  // If the day has changed, update the week display
  if (currentDay !== day) {
    // Remove the "active" class from the previous day
    for (let i = 0; i < week.children.length; i++) {
      week.children[i].classList.remove("active");
    }

    // Add the "active" class to the current day
    week.children[day].classList.add("active");

    // Update the current day to the new one
    currentDay = day;
  }
}

// Call the update function every 500ms (to keep the clock updated in real-time)
setInterval(update, 500);
setInterval(updateWeek, 3600);
