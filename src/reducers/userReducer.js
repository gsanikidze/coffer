export function userReducer(state = [], action){
    switch (action.type) {
        case 'LOG_IN':
                return {
                    ...state,
                    user: {
                        user: action.payload,
                        id: action.payload.uid,
                        displayName: action.payload.displayName,
                        photoURL: action.payload.photoURL
                    }
                };
        case 'LOG_OUT':
                return {
                    ...state,
                    user: undefined
                };
        default: return state;
    }
} 