import { Heading, Box } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";


export function Title(props) {
  return (
    <Box {...styles.title}>
      <Icon name={props.icon} {...styles.titleIcon} />
      <Heading color='white' {...styles.titleHeading}>
        {props.text}
      </Heading>
    </Box>
  );
}