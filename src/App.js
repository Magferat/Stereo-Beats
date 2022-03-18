import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';
import Home from './Components/Home/Home';
import LogIn from './Components/LogSignIN/LogIn';
import SignIn from './Components/LogSignIN/SignIn';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/login'><LogIn /></Route>
          <Route path='/signin'><SignIn /></Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
