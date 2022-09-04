import { ref, Ref } from 'vue';
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from '../firebase-config';

import {
  User,
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

initializeApp(getFirebaseConfig());

export interface CurrentUser {
  user: Ref<User | null>,
  signInUser: () => {},
  signOutUser: () => {}
}

export function getCurrentUser(): CurrentUser {
  const user = ref<User | null> (null)
  const signInUser = async () => await signInWithPopup(getAuth(), new GoogleAuthProvider())
  const signOutUser = () => signOut(getAuth()) 
  onAuthStateChanged(getAuth(), (cangedUser) => user.value = cangedUser);
  return {user, signInUser, signOutUser}
}