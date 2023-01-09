import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeOusideClick } from "../redux/menuSlice";

export function useClickOustsideToClose(
  ref: React.MutableRefObject<HTMLInputElement>,
  setToogleMenu?: React.Dispatch<React.SetStateAction<boolean>>
) {
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        dispatch(closeOusideClick());
        if (setToogleMenu) setToogleMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
}
