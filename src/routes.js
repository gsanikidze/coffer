import React from 'react';
import { Route, Switch } from 'react-router-dom';

// my comp
import Home from './components/pages/home';
import BudgetItem from './components/pages/BudgetItem';
import PageNotFound from './components/pages/404';

const MainRouter = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/budget" component={BudgetItem}/>
            <Route exact component={PageNotFound}/>
        </Switch>
    ) 
}

export default MainRouter;


