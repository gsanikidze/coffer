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

export {
    printAllBudget
}