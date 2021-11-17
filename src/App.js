import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Result from './components/result';
import Api from './components/api';
import User from './components/home';
import Example from './components/example';
import Test from './components/test';

function App() {

    return (
    <div className="App">
      <Router>
      <div className="header">
        <nav>
          <h1>엘리스 심리적성상담</h1>
        </nav>
      </div>

      <div className = "main">
      
        {/* 시작 페이지 */}
        {/* <Link to="/index">index</Link> 초기화면 */}
        

        <Switch>
          <Route exact path="/" component={User}/>
          {/* <Route exact path="/user" component={User}/>         사용자 */}
          <Route exact path="/test" component={Example}/>   {/* 검사 예시 페이지 */}
          <Route path="/test/:id" component={Api}/>         {/* 검사 페이지 */}
          
          <Route path="/test/end" component={Test}/>              {/* 검사완료 페이지 */}
          <Route path="/result" component={Result}/>     {/* 결과표 페이지 */}
        </Switch>
      
      </div>
      <div className = "footer">
      </div>
      </Router>
    </div>
  );
}

export default App;
