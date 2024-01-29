function extractDateParts(regexPattern, inputString) {
  const match = inputString.match(regexPattern);

  if (match) {
    // The entire match is at index 0
    console.log("Match found:", match[0]);

    // Extract specific parts using groups
    const day = match[1] || "N/A";
    const month = match[2] || "N/A";
    const year = match[3] || "N/A";

    console.log("Day:", day);
    console.log("Month:", month);
    console.log("Year:", year);
  } else {
    console.log("No match found.");
  }
}

// Example usage with a date pattern (dd-mm-yyyy)
const datePattern = /(\d{2})-(\d{2})-(\d{4})/;
const dateString = "25-01-2022";

extractDateParts(datePattern, dateString);
