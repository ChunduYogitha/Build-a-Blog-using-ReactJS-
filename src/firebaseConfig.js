import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBKJ22sAiJvLotR3eOxXcGn9UYnGn_aGis",
  authDomain: "my-articles-ade84.firebaseapp.com",
  databaseURL: "https://my-articles-ade84-default-rtdb.firebaseio.com",
  projectId: "my-articles-ade84",
  storageBucket: "my-articles-ade84.appspot.com",
  messagingSenderId: "276135095630",
  appId: "1:276135095630:web:dcc7168557b80d0ff3021f"

  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);