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

function loading(status){
    return{
        type: "LOADING",
        payload: status
    }
}

export {
    printAllBudget,
    logIn,
    logOut,
    loading
}