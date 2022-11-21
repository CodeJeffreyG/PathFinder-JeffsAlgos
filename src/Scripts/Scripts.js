function createGrid() {
  const twoDArray = [];

  for (let row = 0; row < 10; row += 1) {
    twoDArray.push([]);
    for (let col = 0; col < 10; col += 1) {
      twoDArray[row].push([]);
    }
  }

  return twoDArray;
}

console.log(createGrid());
