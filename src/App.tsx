import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import "./App.css";
import { ToastProvider } from "@/common/components/Toast/ToastProvider";

export const App = () => (
  <ToastProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ToastProvider>
);
