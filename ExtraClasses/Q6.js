const linkedinURLValidator = (url) => {
  const regex =
    /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_\-]{5,30}[a-zA-Z0-9]$/;
  const isValid = regex.test(url);

  if (isValid) {
    console.log("Valid LinkedIn profile URL.");
  } else {
    console.log("Invalid LinkedIn profile URL.");
  }
};

// Test cases
linkedinURLValidator("https://www.linkedin.com/in/username"); // Valid URL
linkedinURLValidator("https://www.linkedin.com/in/valid-user-123"); // Valid URL
linkedinURLValidator("https://www.linkedin.com/in/invalid$profile"); // Invalid URL
