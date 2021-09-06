import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./Header";
import productList from "./views/productList";
import Main from "./views/Main";

function App() {
  return (
    <div>
      <Header />
      {/* <div>
        <BrowserRouter>
          <Route path="/list" component={productList} exact={true} />
          <Route path="/" component={Main} exact={true} />
        </BrowserRouter>
      </div> */}
    </div>
  );
}

export default App;
