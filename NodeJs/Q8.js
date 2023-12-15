const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on("subscribe", (channel) => {
  console.log("Thanks for subscribing to " + channel);
});
function stimulateSubscription() {
  eventEmitter.emit("subscribe", "college wallah");
}
stimulateSubscription();
