import React from 'react';
import { Route, Switch } from 'react-router-dom';

// my comp
import Home from './components/pages/Home';
import BudgetItem from './components/pages/BudgetItem';
import CreateBudget from './components/pages/CreateBudget';
import PageNotFound from './components/pages/404';

const MainRouter = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/budget" component={BudgetItem}/>
            <Route exact path="/create-budget" component={CreateBudget}/>
            <Route exact component={PageNotFound}/>
        </Switch>
    ) 
}

export default MainRouter;


