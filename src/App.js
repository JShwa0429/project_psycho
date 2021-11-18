import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import UserInput from './PsychoTest/UserInput';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>엘리스 심리적성상담</h1>
        </div>

        <div className="app-container">
          <UserInput />
        </div>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default App;
