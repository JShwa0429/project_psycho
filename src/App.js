import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import PsychoTest from "./PsychoTest/PsychoTest";

function App() {
  return (
    <Router>
      <div className="App justify-content">
        <PsychoTest />
      </div>
    </Router>
  );
}

export default App;
