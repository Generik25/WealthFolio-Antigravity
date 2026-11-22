import * as firebaseApp from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// --- HELPER CURĂȚARE VARIABILE ---
// Elimină ghilimelele și spațiile accidentale (ex: '"AIza..."' devine 'AIza...')
const sanitize = (value: string | undefined) => {
  if (!value) return undefined;
  return value.replace(/['"]/g, '').trim();
};

// --- CONFIGURARE FIREBASE ---
// Folosim funcția sanitize pentru a preveni erorile de copiere din Vercel
const firebaseConfig = {
  apiKey: sanitize((import.meta as any).env.VITE_FIREBASE_API_KEY),
  authDomain: sanitize((import.meta as any).env.VITE_FIREBASE_AUTH_DOMAIN),
  projectId: sanitize((import.meta as any).env.VITE_FIREBASE_PROJECT_ID),
  storageBucket: sanitize((import.meta as any).env.VITE_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: sanitize((import.meta as any).env.VITE_FIREBASE_MESSAGING_SENDER_ID),
  appId: sanitize((import.meta as any).env.VITE_FIREBASE_APP_ID)
};

let app;
let auth: any = null;
let db: any = null;

// DEBUG: Verificăm în consolă dacă cheile sunt încărcate (F12 în browser)
console.log("Firebase Config Status:", {
  apiKeyLoaded: !!firebaseConfig.apiKey,
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain
});

// Initializam doar daca avem cheile configurate
if (firebaseConfig.apiKey) {
  try {
    // FIX: Cast to any to bypass potential TS definition issues with named exports in 'firebase/app'
    const appModule = firebaseApp as any;

    const apps = appModule.getApps ? appModule.getApps() : [];
    app = !apps.length 
          ? appModule.initializeApp(firebaseConfig) 
          : appModule.getApp();

    auth = getAuth(app);
    db = getFirestore(app);

    // Setam persistenta locala
    setPersistence(auth, browserLocalPersistence).catch((error) => {
      console.error("Eroare la setarea persistenței:", error);
    });
    console.log("Firebase initialized successfully");
  } catch (e) {
    console.error("Firebase initialization failed:", e);
  }
} else {
  console.warn("Firebase config keys missing or invalid. App running in offline mode.");
}

export { auth, db };
