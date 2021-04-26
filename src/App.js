import './App.css';
import Navbar from '../src/components/navbar';
import Mainpage from '../src/components/Mainpage';
import {Login} from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch,Link} from "react-router-dom";




function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = { Login }></Route>
        <Route  path="/" component = { Navbar }></Route>
        <Route  path="/" component = { Mainpage }></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
