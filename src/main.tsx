import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./components/Context/Auth.tsx";
import { ItemsContextProvider } from "./components/Context/Item.tsx";

createRoot(document.getElementById("root")!).render(
  <ItemsContextProvider>
  <AuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </AuthProvider>
  </ItemsContextProvider>
);
