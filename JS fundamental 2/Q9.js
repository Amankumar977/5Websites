let uniqueCharactersCheck = (name) => {
  let setOfName = new Set(name);

  if ([...setOfName].join("") == name) {
    console.log("The input string contains unique characters.");
  } else {
    console.log("The input string contains duplicates.");
  }
};
uniqueCharactersCheck("Akasha");
