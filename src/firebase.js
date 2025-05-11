import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOstOYSi2RLUJAKpy3Gshi03aMXVHf0lQ",
  authDomain: "load-balancer-5d41d.firebaseapp.com",
  databaseURL: "https://load-balancer-5d41d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "load-balancer-5d41d",
  storageBucket: "load-balancer-5d41d.appspot.com",
  messagingSenderId: "220555842095",
  appId: "1:220555842095:web:e0287141f6cfd56c82ecda",
  measurementId: "G-2CDPRXXLGZ"
};

const app = initializeApp(firebaseConfig);

export default app;
