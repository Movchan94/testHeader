import React from 'react';
import Header from "../header/header";
import About from "../../pages/About";
import {Switch, Route} from "react-router-dom";
import Users from "../../pages/Users";
import Profile from "../../pages/Profile";
import MyAccount from "../../pages/MyAccount";

const App = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path='/about/' component={About} exact />
                <Route path='/users/' component={Users} exact />
                <Route path='/profile/' component={Profile} exact />
                <Route path='/my-account/' component={MyAccount} exact />
            </Switch>
        </div>
    );
};

export default App;
