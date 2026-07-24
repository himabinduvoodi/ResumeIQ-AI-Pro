import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDj_y-GIZmaKn0_YPnnpiVL4iq1Yc6MLDo",
  authDomain: "resumeiq-ai-pro.firebaseapp.com",
  projectId: "resumeiq-ai-pro",
  storageBucket: "resumeiq-ai-pro.firebasestorage.app",
  messagingSenderId: "647464765203",
  appId: "1:647464765203:web:26d6c9c685d79ed1d43ce6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;