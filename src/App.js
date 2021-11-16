import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Result from './components/result';
import Api from './components/api';
import User from './components/user';
import Example from './components/example';
import Test from './components/test';

function App() {
    return (
    <div className="App">
      <Router>
        {/* 시작 페이지 */}
        {/* <Link to="/index">index</Link> 초기화면 */}
        
        <Link to="/user">user</Link>
        <Link to="/example">Example</Link>  {/* 검사예시 페이지 */}
        <Link to="/test">Test</Link>
        <Link to="/api">api</Link>          {/* 검사진행 페이지 */}
        
                                        
        <Link to="/result">result</Link> 
        <Switch>
          <Route path="/user" component={User}/>         {/* 사용자 */}
          <Route path="/test/example" component={Example}/>   {/* 검사 예시 페이지 */}
          <Route path="/api" component={Api}/>           {/* 검사 문제 */}
          <Route path="/test/:id" component={Test}/>         {/* 검사 페이지 */}
          <Route path="/test/end" component={Test}/>              {/* 검사완료 페이지 */}
          <Route path="/result" component={Result}/>     {/* 결과표 페이지 */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
