import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// my comp
import AuthPage from './components/pages/Auth';
import Home from './components/pages/Home';
import BudgetItem from './components/pages/BudgetItem';
import CreateBudget from './components/pages/CreateBudget';
import AddBankCard from './components/pages/AddBankCard';
import Loading from './components/moleculas/lodaing'
import PageNotFound from './components/pages/404';

import { checkAuth } from './components/pages/Auth/checkAuth'

class MainRouter extends Component {
    constructor(props){
        super(props)
        this.state = {
            authorized: false
        }

        this.authRouter = this.authRouter.bind(this);
    }



    authRouter(){
        checkAuth().then(authorized => {
            if(authorized){
                return(
                    <Route exact path="/" component={Home}/>
                )
            }
        }) 
    }

    // componentWillMount(){
    //     this.authRouter()
    // }

    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/auth" component={AuthPage}/>
                <Route exact path="/budget-:id" component={BudgetItem}/>
                <Route exact path="/create-budget" component={CreateBudget}/>
                <Route exact path="/add-bank-card" component={AddBankCard}/>
                <Route exact path="/loading" component={Loading}/>
                <Route exact component={PageNotFound}/>
            </Switch>
        ) 
    } 
}

export default MainRouter;


