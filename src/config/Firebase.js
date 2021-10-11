import { initializeApp, } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, getDocs, collection, query, where, onSnapshot, addDoc, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9-luk66G2hPhWATNpQua6iWbjReRXSPI",
    authDomain: "firechatapp-e5a3d.firebaseapp.com",
    projectId: "firechatapp-e5a3d",
    storageBucket: "firechatapp-e5a3d.appspot.com",
    messagingSenderId: "638016371067",
    appId: "1:638016371067:web:33f0a16754856e94cba5de",
    measurementId: "G-6J82G9E7HG"
};

initializeApp(firebaseConfig)

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    db,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    orderBy
};