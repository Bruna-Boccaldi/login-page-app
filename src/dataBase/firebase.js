import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const auth = getAuth();

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDilsAZGZrhoMFXsBXAKlbUWG7cKLlwpFY",
    authDomain: "login-page-app-2ff48.firebaseapp.com",
    projectId: "login-page-app-2ff48"
});