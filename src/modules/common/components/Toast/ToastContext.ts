import type { ToastType } from "@/common/components/Toast/types";
import { createContext } from "react";

interface ToastContextValue {
  showToast: (
    message: string,
    type?: ToastType,
  ) => void;

  removeToast: (id: string) => void;
}

export const ToastContext =
  createContext<ToastContextValue | null>(null);