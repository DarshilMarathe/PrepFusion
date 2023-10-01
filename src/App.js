import React from "react";
import "./App.css"; // Import your main CSS file
import Problemset from "./components/PieChart"; // Import your Problemset component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Add any header content if needed */}
      </header>
      <main>
        <Problemset />
      </main>
      <footer>
        {/* Add footer content if needed */}
      </footer>
    </div>
  );
}

export default App;
