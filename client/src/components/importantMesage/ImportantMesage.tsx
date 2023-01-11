import * as styles from "./importantMesage.style";
import { BackgroundContainer } from "../laundryRooms/laundryRooms.style";
import { MainBtn } from "../../styles/globalStyles";
import { Input, Label } from "../laundryRooms/laundryRooms.style";
import { Warning } from "../forum/addThreadPopUp/addThreadPopUp.styles";

import { useState } from "react";
import { addReminder } from "../../api/addReminder";
const ImportantMesage = () => {
  const [toogelDelete, setToogelDelete] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const [info, setInfo] = useState({
    text: "",
    title: "",
    from: "",
  });

  const sendOnClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await addReminder(info);
    console.log(data);
    if (data) {
      setAlertMessage(false);
      setInfo({
        text: "",
        title: "",
        from: "",
      });
    } else {
      setAlertMessage(true);
    }
  };

  return (
    <BackgroundContainer>
      <styles.Container>
        <styles.Remove onClick={() => setToogelDelete(true)}>
          Remove current message?
        </styles.Remove>
        <styles.Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => sendOnClick(e)}
        >
          <styles.TextArea
            value={info.text}
            name='text'
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setInfo({ ...info, [e.target.name]: e.target.value })
            }
            required
            placeholder='Message'
          ></styles.TextArea>
          {alertMessage && <Warning>Couldnt Add Message</Warning>}
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInfo({ ...info, [e.target.name]: e.target.value })
            }
            required
            placeholder='Title Required'
            name='title'
            value={info.title}
          />
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInfo({ ...info, [e.target.name]: e.target.value })
            }
            placeholder='From'
            name='from'
            value={info.from}
          />
          <MainBtn>Add</MainBtn>
        </styles.Form>
      </styles.Container>
    </BackgroundContainer>
  );
};

export default ImportantMesage;
