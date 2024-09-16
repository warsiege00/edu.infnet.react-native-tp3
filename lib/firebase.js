import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

export const firebaseConfig = {
  apiKey: "AIzaSyBAajoVow4RRI6EWOfT9Ad9N4qT-iVj0xQ",
  authDomain: "react-native-tp3-e56d6.firebaseapp.com",
  projectId: "react-native-tp3-e56d6",
  storageBucket: "react-native-tp3-e56d6.appspot.com",
  messagingSenderId: "703093775063",
  appId: "1:703093775063:web:06f9e45d585a173c16ee92"
};

const firebase = initializeApp(firebaseConfig);
const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export {firebase, auth};