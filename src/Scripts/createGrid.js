export default function createGrid() {
  const Grid = [];
  let node = {
    className: "node",
    id: null,
    wall: null,
    start: null,
    end: null
  };

  for (let row = 0; row < 20; row += 1) {
    Grid.push([]);
    for (let col = 0; col < 20; col += 1) {
      Grid[row].push({...node, id: `${row} ${col}`});
    }
  }

  return Grid;
}


