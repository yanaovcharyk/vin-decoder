import {
  useCallback,
  useRef,
  useState,
  type ReactNode,
} from "react";

import type {
  ToastMessage,
  ToastType,
} from "@/common/components/Toast/types";

import { Toast } from "@/common/components/Toast/Toast";
import { ToastContext } from "@/common/components/Toast/ToastContext";


interface Props {
  children: ReactNode;
}


export function ToastProvider({
  children,
}: Props) {

  const [toasts, setToasts] = useState<ToastMessage[]>([]);


  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});


  const removeToast = useCallback((id: string) => {

    setToasts((current) =>
      current.filter((toast) => toast.id !== id),
    );


    if (timers.current[id]) {
      clearTimeout(timers.current[id]);

      delete timers.current[id];
    }

  }, []);



  const showToast = useCallback(
    (
      message: string,
      type: ToastType = "info",
    ) => {


      setToasts((current) => {

        const existingToast = current.find(
          (toast) =>
            toast.message === message &&
            toast.type === type,
        );


        if (existingToast) {


          if (timers.current[existingToast.id]) {
            clearTimeout(
              timers.current[existingToast.id],
            );
          }


          timers.current[existingToast.id] =
            setTimeout(() => {
              removeToast(existingToast.id);
            }, 3000);


          return current;
        }



        const id = crypto.randomUUID();


        timers.current[id] = setTimeout(() => {
          removeToast(id);
        }, 3000);



        return [
          ...current,
          {
            id,
            message,
            type,
          },
        ];

      });

    },
    [removeToast],
  );



  return (
    <ToastContext.Provider
      value={{
        showToast,
        removeToast,
      }}
    >

      {children}


      <div className="toast-container">

        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            onClose={removeToast}
          />
        ))}

      </div>

    </ToastContext.Provider>
  );
}
