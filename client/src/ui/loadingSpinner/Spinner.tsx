import * as styles from "./spinner.styles";

interface Props {
  color?: string;
}
const Spinner = ({ color }: Props) => {
  return <styles.Container color={color ? color : "white"}></styles.Container>;
};

export default Spinner;
