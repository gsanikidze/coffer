import {firebaseDB} from '../CONFIG'

export default function deleteFromDb(itemsType, itemId, page) {
    const localUid = JSON.parse(sessionStorage.getItem('uid'))
    firebaseDB
        .ref(`${itemsType}/${localUid}/${itemId}`)
        .remove() && window
        .location
        .replace('/')
}