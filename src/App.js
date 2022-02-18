/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import SelectStore from "./pages/SelectStore";
import SelectWallet from "./pages/SelectWallet";
import AddStore from "./pages/AddStore";
import Main from "./components/layout/Main";
import { useEffect } from "react";
import Cookies from "js-cookie";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  useEffect(() => {
    Cookies.remove("storeItem");
  });
  return (
    <div className="App">
      <Switch>
        <Route path="/add-store" exact component={AddStore} />
        <Route path="/select-store" exact component={SelectStore} />
        <Route path="/select-wallet" exact component={SelectWallet} />
        <Main>
          <Route exact path="/home" component={Home} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="*" to="/home" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
