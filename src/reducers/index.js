import { combineReducers } from 'redux';


// my reducers
import { budgetReducer as allBudgets } from './budgetReducer';
import {userReducer as user} from './userReducer';


const rootReducer = combineReducers({
    allBudgets,
    user
})

export default rootReducer;