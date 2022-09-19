
import "./normalize.scss";
import './App.scss';

import {Switch , Route} from "react-router-dom";
import Home from './page/home/Home';

function App() {
  return (
   <>
     <Switch>
       <Route exact path="/food" component={Home} />
     </Switch>
   </>
  );
}

export default App;
