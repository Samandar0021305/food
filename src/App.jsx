
import "./normalize.scss";
import './App.scss';

import {Switch , Route} from "react-router-dom";
import Home from './page/home/Home';
import About from "./page/about/About";
import Market from "./page/market/Market";
import Warehouses from "./page/warehouses/Warehouses.jsx";


function App() {
  return (
   <>
     <Switch>
       <Route exact path="/food" component={Home} />
       <Route path="/about" component={About}  />
       <Route path="/market" component={Market}  />
       <Route path="/warehouses" component={Warehouses} />
     </Switch>
   </>
  );
}

export default App;
