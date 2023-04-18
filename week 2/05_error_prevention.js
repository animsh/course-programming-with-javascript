function addTwoNums(a, b) {
  try {
    if (typeof a == "number" && typeof b == "number") {
      console.log(a + b);
    } else {
      throw new ReferenceError("Need numbers as input");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

addTwoNums("5", 5);

console.log("It still works");
