import "./Grid.css";
import Node from "../Node/Node";
import createGrid from "../Scripts/createGrid";

export default function Grid() {
  const grid = createGrid();
  return (
    <div className="Grid-container">
      <main className="Grid">
        {grid.map((row) => {
          return row.map((node) => <Node />);
        })}
      </main>
    </div>
  );
}
