import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Api from './components/api.js';

function App() {

    return (
    <div className="App">
      <BrowserRouter>
        <Link to="/index">home</Link>
        <Link to="/get">api</Link>
        

        <Switch>
          <Route path="/index">
            <p>GET POST</p>
          </Route>
          <Route path="/get" component={Api}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
