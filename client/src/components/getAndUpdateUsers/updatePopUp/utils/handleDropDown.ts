import { validateAdmin } from "../../../createUser/utils/validateAdmin";

export const handleDropDown = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setDropDownValue: React.Dispatch<React.SetStateAction<string>>,
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>,
  dropDownValue: string
) => {
  setDropDownValue(e.target.value);
  const validatedAdminString = validateAdmin(dropDownValue);
  setAdmin(validatedAdminString);
};
