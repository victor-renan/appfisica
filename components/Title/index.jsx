import { Heading, Box } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";


export function Title({ icon, text}) {
  return (
    <Box {...styles.title}>
      <Icon name={icon} {...styles.titleIcon} />
      <Heading color='white' {...styles.titleHeading}>
        {text}
      </Heading>
    </Box>
  );
}