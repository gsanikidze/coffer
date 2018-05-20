export function budgetReducer(state = [], action){
    switch (action.type) {
        case 'PRINT_ALL_BUDGETS':
                return {
                    ...state,
                    budgets: action.payload
                }
    
        default: return state;
    }
} 