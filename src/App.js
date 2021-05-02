import './App.css';
import Navbar from '../src/components/navbar';
import Mainpage from '../src/components/Mainpage';
import manageMed from '../src/components/manageMed';
import manageTeam from '../src/components/manageTeam';
import manageOrd from '../src/components/manageOrders';
import {Login} from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";




function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = { Login }></Route>
        <Route  path="/home" component = { Mainpage }></Route>
        <Route exact path="/manageMeds" component = { manageMed }></Route>
        <Route exact path="/manageTeam" component = { manageTeam }></Route>
        <Route exact path="/manageorders" component = { manageOrd}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
