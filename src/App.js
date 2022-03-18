import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';
import Home from './Components/Home/Home';
import LogIn from './Components/LogSignIN/LogIn';
import SignIn from './Components/LogSignIN/SignIn';
import AuthProvider from './context/AuthProvider'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route path="/home">
              <Home />
            </Route>
            <Route path='/login'><LogIn /></Route>
            <Route path='/signin'><SignIn /></Route>
            <Route exact path="/">
              <Home />
            </Route>

          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
