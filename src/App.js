import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';

// import Api from './components/api';
import User from './components/user'
function App() {
    return (
    <div className="App">
      <BrowserRouter>
        {/* 시작 페이지 */}
        <Link to="/index">index</Link>
        {/* 검사예시 페이지 */}
        {/* 검사진행 페이지 */}
        {/* 검사완료 페이지 */}
        {/* 결과표 페이지 */}
        <Link to="/get">api</Link>
        <Link to="/user">user</Link>

        <Switch>
          <Route path="/index">
            <p>GET POST</p>
          </Route>
          {/* <Route path="/get" component={Api}/> */}
          <Route path="/user" component={User}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
