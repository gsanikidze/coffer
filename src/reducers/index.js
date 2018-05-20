import { combineReducers } from 'redux';


// my reducers
import { budgetReducer } from './budgetReducer';


const rootReducer = combineReducers({
    budgetReducer
})

export default rootReducer;