const EventEmitter = require("events");

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Determine the current maximum number of listeners for an event
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log("Current maximum number of listeners:", currentMaxListeners);

// Set the maximum number of listeners to 5
eventEmitter.setMaxListeners(5);

// Subscribe to the "subscribe" event multiple times to exceed the limit and trigger a warning
for (let i = 0; i < 10; i++) {
  eventEmitter.on("subscribe", () => {
    console.log("User has subscribed!");
  });
}

// Simulate triggering the "subscribe" event
function simulateSubscription() {
  // Trigger the "subscribe" event
  eventEmitter.emit("subscribe");
}

// Call the function to simulate a user subscribing
simulateSubscription();
