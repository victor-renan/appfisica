import { Box, Button, Text } from "native-base";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";


export function Document(props) {
  return (
    <Box id={props.id} {...styles.document}>
      <Icon name="document-text-outline" {...styles.documentIcon} />
      <Text {...styles.documentType}>{props.type}</Text>
      <Text {...styles.documentName}>{props.name}</Text>
      <Button {...styles.documentButton}>
        <Icon name="download-outline" {...styles.documentIcon} />
      </Button>
    </Box>
  );
}