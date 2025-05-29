import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDVgNwDoJRJCqJNskAn2YE5PRye4N8LnSU",
  authDomain: "slbs-new.firebaseapp.com",
  databaseURL: "https://slbs-new-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "slbs-new",
  storageBucket: "slbs-new.firebasestorage.app",
  messagingSenderId: "998867849008",
  appId: "1:998867849008:web:420238297a5073a57482f5",
  measurementId: "G-EX2J9MSR40"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
