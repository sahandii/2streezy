import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDDB3SuUWRpzTZRINMJ3a3SkBHlHYUfwLQ",
	authDomain: "streezy-d7b1d.firebaseapp.com",
	projectId: "streezy-d7b1d",
	storageBucket: "streezy-d7b1d.appspot.com",
	messagingSenderId: "719635287736",
	appId: "1:719635287736:web:b101b6cd5315460837ee4d",
	measurementId: "G-HJQ3T2DX9X",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
