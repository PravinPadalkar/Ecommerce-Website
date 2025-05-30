import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { UsersListProvider } from "./contexts/UsersListContext.jsx";

createRoot(document.getElementById("root")).render(
  <HeroUIProvider>
    <ToastProvider toastProps={{ timeout: 2000 }} />
    <UsersListProvider>
      <App />
    </UsersListProvider>
  </HeroUIProvider>
  // Too visualize main
);