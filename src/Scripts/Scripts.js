export function createGrid() {
  const createGrid = [];
  let node = {
    className: "node",
    id: null,
    wall: null,
    start: null,
    end: null
  };

  for (let row = 0; row < 10; row += 1) {
    createGrid.push([]);
    for (let col = 0; col < 10; col += 1) {
        createGrid[row].push({...node, id: `${row} ${col}`});
    }
  }

  return createGrid;
}


