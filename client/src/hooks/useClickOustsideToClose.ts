import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeOusideClick } from "../redux/menuSlice";

export function useClickOustsideToClose(ref: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = (event: Event) => {
      if (!ref.current?.contains(event.target)) {
        dispatch(closeOusideClick());
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
}
