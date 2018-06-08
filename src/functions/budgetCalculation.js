import {firebaseDB} from '../CONFIG'

function getData(budgetId) {
    return new Promise(function (res, rej) {
        const localUid = JSON.parse(sessionStorage.getItem('uid'))
            let price,
                totalTransfer,
                percent

            firebaseDB
                .ref(`budgets/${localUid}/${budgetId}`)
                .once('value')
                .then((snapshot) => {
                    price = parseInt(snapshot.val().price)
                    totalTransfer = snapshot
                        .val()
                        .totalTransfer
                    percent = totalTransfer / price * 100
                })
                .then(() => {
                    res({price, totalTransfer, percent})
                })
        })
    }

    export default async function budgetCalculation(budgetId, curentTranfer) {

        const localUid = JSON.parse(sessionStorage.getItem('uid'))
        let data = await getData(budgetId)

        let price = data.price
        let totalTransfer = data.totalTransfer
        let percent = data.percent

        if (!curentTranfer) {
            return {price, totalTransfer, percent}
        } else {
            totalTransfer += curentTranfer
            percent = totalTransfer / price * 100
            firebaseDB
                .ref(`budgets/${localUid}/${budgetId}/totalTransfer`)
                .set(totalTransfer)

            let updatedData = await getData(budgetId)
            price = updatedData.price
            totalTransfer = updatedData.totalTransfer
            percent = updatedData.percent
            return {price, totalTransfer, percent}
        }
    }