import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAFDgM1nVruC0vqzMLn9WmBPfJeiWGkYFw',
  authDomain: 'capstone-storefront.firebaseapp.com',
  projectId: 'capstone-storefront',
  storageBucket: 'capstone-storefront.appspot.com',
  messagingSenderId: '619396631015',
  appId: '1:619396631015:web:6c6517749fc6c506d99542',
  measurementId: 'G-YC28TRGFTK'
};

const firebase = initializeApp(firebaseConfig); // eslint-disable-line no-unused-vars

const googleAuthProvider = new GoogleAuthProvider();

googleAuthProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleAuthProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleAuthProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
    } catch (err) {
      console.log('error creating the user', err.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (email && password) {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
  }
  return null;
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (email && password) {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  }
  return null;
};
