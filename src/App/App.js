import "./App.css";
import Grid from "../Grid/Grid";
import createGrid from "../Scripts/createGrid";

function App() {
  const grid = createGrid();
  return (
    <div className="entireContainer">
      <Grid />
    </div>
  );
}

export default App;
