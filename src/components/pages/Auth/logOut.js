import { firebase, firebaseDB } from '../../../CONFIG'

export function logOut(){
    firebase.auth().signOut().then(() => {
        firebaseDB.ref(`users/${JSON.parse(sessionStorage.getItem('uid'))}/token`).remove();
        sessionStorage.clear()
      }, function(error) {
        console.log(error);
    });
}