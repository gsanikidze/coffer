import React from 'react';
import { Route, Switch } from 'react-router-dom';

// my comp
import Home from './components/pages/home';
import PageNotFound from './components/pages/404';

const MainRouter = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>


            <Route exact component={PageNotFound}/>
        </Switch>
    ) 
}

export default MainRouter;


