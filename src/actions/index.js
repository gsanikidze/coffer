function printAllBudget(){
    return{
        type: 'PRINT_ALL_BUDGETS',
        payload: [
            {id: 1, name: 'budget name'},
            {id: 2, name: 'budget name'},
            {id: 3, name: 'budget name'}
        ]
    }
}

function logIn(user){
    return{
        type: 'LOG_IN',
        payload: {user}
    }
}

function logOut(){
    return{
        type: 'LOG_OUT'
    }
}

export {
    printAllBudget,
    logIn,
    logOut
}