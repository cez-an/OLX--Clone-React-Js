import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { fireStore } from "../Firebase/Firebase";

export type Product = {
  id: string;
  imageUrl?:string;
  title: string;
  category: string;
  price: number | string;
  description: string;
  userId: string;
  userName: string;
  createdAt: any;
};

type ItemsContextType = {
  items: Product[] | null;
  setItems: React.Dispatch<React.SetStateAction<Product[] | null>>;
};

const ItemsContext = createContext<ItemsContextType | null>(null);

export const useItems = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("useItems must be used within ItemsContextProvider");
  }
  return context;
};

export const ItemsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchItemsFromFireStore = async () => {
      try {
        const productsCollection = collection(fireStore, "products");
        const productSnapshot = await getDocs(productsCollection);

        const productsList = productSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];

        setItems(productsList);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };

    fetchItemsFromFireStore();
  }, []);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};
