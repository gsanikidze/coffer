import { combineReducers } from 'redux';


// my reducers
import { budgetReducer as allBudgets } from './budgetReducer';
import {userReducer as user} from './userReducer';
import loading from './loading'


const rootReducer = combineReducers({
    allBudgets,
    user,
    loading
})

export default rootReducer;