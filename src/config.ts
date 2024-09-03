import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmgCtAn3FiJCBYv7-aZUWVT1WJsKRtSs4",
  authDomain: "memo-app-2b0d6.firebaseapp.com",
  projectId: "memo-app-2b0d6",
  storageBucket: "memo-app-2b0d6.appspot.com",
  messagingSenderId: "647891857702",
  appId: "1:647891857702:web:e70f6aa7601f59fe2f51e7"
};

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

const db = getFirestore(app)

export { app, auth, db }