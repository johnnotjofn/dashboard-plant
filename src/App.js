import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home/Home';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import History from './views/History/History';

function App() {
  return (
    <Router>
      <SideBar />
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/history">
          <History />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
