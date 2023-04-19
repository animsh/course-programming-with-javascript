let counter = 6;
function recursionExample() {
  console.log(counter);
  counter -= 1;
  //   recursionExample(); will lead to infinite loop
  if (counter > 0) {
    recursionExample();
  }
}

recursionExample();
