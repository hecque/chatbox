import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


const firebaseApp = firebase.initializeApp({
    apiKey: //private,
    authDomain: "chatbox-f0be3.firebaseapp.com",
    databaseURL: "https://chatbox-f0be3.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }
export default base
