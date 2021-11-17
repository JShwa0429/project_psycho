import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        

        <Switch>
          <Route exact path="/" component={User}/>
          {/* <Route exact path="/user" component={User}/>         사용자 */}
          
          <Route path="/api" component={Api}/>           {/* 검사 문제 */}
          <Route exact path="/test" component={Example}/>   {/* 검사 예시 페이지 */}
          <Route path="/test/:id" component={Api}/>         {/* 검사 페이지 */}
          
          <Route path="/test/end" component={Test}/>              {/* 검사완료 페이지 */}
          <Route path="/result" component={Result}/>     {/* 결과표 페이지 */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
