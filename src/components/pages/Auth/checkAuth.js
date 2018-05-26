import { firebaseDB } from '../../../CONFIG';

export function checkAuth(){
    const localUid = JSON.parse(sessionStorage.getItem('uid'))
    const localToken = JSON.parse(sessionStorage.getItem('token'))

    return firebaseDB.ref(`users/${localUid}`).once('value')
        .then(function(snapshot){
            if(snapshot.val() && snapshot.val().token === localToken){
                return true
            } else {
                return false
            }
        }).catch((error) => {
            console.log(error)
        })
}
