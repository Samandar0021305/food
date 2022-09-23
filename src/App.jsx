
import "./normalize.scss";
import './App.scss';

import {Switch , Route} from "react-router-dom";
import Home from './page/home/Home';
import About from "./page/about/About";

function App() {
  return (
   <>
     <Switch>
       <Route exact path="/food" component={Home} />
       <Route path="/about" component={About}  />
     </Switch>
   </>
  );
}

export default App;
