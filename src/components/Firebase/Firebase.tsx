import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import type { Product } from "../Context/Item";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const fireStore = getFirestore(app);

export const fetchItemsFromFireStore = async (): Promise<Product[]> => {
  try {
    const productCollection = collection(fireStore, "products");
    const productSnapshot = await getDocs(productCollection);

    const productList: Product[] = productSnapshot.docs.map((doc) => {
      const data = doc.data() as Omit<Product, "id">; 
      return {
        id: doc.id,
        ...data,
      };
    });

    return productList;
  } catch (error) {
    console.log("Error fetching products from Firestore", error);
    return []; 
  }
};
