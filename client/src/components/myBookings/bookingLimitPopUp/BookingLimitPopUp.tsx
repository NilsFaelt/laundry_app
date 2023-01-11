import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBookingLimit } from "../../../redux/settingsSlice";

import * as styles from "./bookingLimitPopUp.style";
interface Props {
  setToogleBookingLimit: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookingLimitPopUp = ({ setToogleBookingLimit }: Props) => {
  const [input, setInput] = useState(3);
  const dispatch = useDispatch();
  const updateOnClick = () => {
    setToogleBookingLimit(false);
    dispatch(updateBookingLimit(input));
  };
  return (
    <styles.Container>
      <styles.Close onClick={() => setToogleBookingLimit(false)} />
      <styles.P>Change BookingLimit</styles.P>
      <styles.Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.valueAsNumber)
        }
        type='number'
      />
      <styles.BtnDiv>
        <styles.DangerBtn onClick={() => setToogleBookingLimit(false)}>
          No
        </styles.DangerBtn>
        <styles.PstvBtn onClick={() => updateOnClick()}>Update</styles.PstvBtn>
      </styles.BtnDiv>
    </styles.Container>
  );
};

export default BookingLimitPopUp;
