// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyB-SNsZ7luOKKxnp6WrN_L9PvJNX5qYQPU',
  authDomain: 'profitoro-d173e.firebaseapp.com',
  databaseURL: 'https://profitoro-d173e.firebaseio.com',
  storageBucket: 'profitoro-d173e.appspot.com'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
