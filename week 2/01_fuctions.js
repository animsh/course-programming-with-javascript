function addTwoNums(a, b) {
  console.log(a + b);
}

// addTwoNums(7, 9);

function letterFinder(word, match) {
  //   for (const char of word) {
  //     if (char == match) {
  //       console.log("We found match!");
  //     }
  //   }
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log("Found the", match, "at", i);
    } else {
      console.log("--No match found at", i);
    }
  }
}

letterFinder("test", "t");
