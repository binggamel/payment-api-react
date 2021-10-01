import "./App.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./Header";
import productList from "./views/pList";
import productDetail from "./views/pDetail";
import Main from "./views/Main";
import Login from "./views/Login";
import MyPage from "./views/MyPage";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Route path="/login" component={Login} exact={true} />
        <Route path="/mypage" component={MyPage} exact={true} />
        <Route path="/list" component={productList} exact={true} />
        <Route path="/list/:index" component={productDetail} exact={true} />
        <Route path="/" component={Main} exact={true} />
      </div>
    </div>
  );
}

export default App;
