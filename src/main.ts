import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//Firebase
import firebase from 'firebase/compat/app'
import 'firebase/compat/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyAYNSKCy--VoY4-9ABHd4vj0a2PEFILKCg",
  authDomain: "yoyo-pajak.firebaseapp.com",
  projectId: "yoyo-pajak",
  storageBucket: "yoyo-pajak.appspot.com",
  messagingSenderId: "245750756442",
  appId: "1:245750756442:web:926360606d3a8405d1d463",
  measurementId: "G-3F84EGKLEQ"
}

//Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

createApp(App).mount('#app')
