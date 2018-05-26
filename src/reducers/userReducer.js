export function userReducer(state = [], action){
    switch (action.type) {
        case 'LOG_IN':
                return {
                    ...state,
                    user: {
                        uid: action.payload.user.uid,
                        displayName: action.payload.user.displayName,
                        photoURL: action.payload.user.photoURL,
                        token: action.payload.user.token,
                        userAuthorized: action.payload.user.userAuthorized
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