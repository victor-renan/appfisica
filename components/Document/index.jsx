import { Box, Button, Center, HStack, Text, Link } from "native-base";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";


export function Document({ name, file }) {
  return (
    <Box {...styles.document}>
      <Icon name="document-text-outline" {...styles.documentIcon} />
      <Text {...styles.documentName}>{name}</Text>
      <Link isExternal href={file} {...styles.documentButton}>
        <Icon name="arrow-down" size={22} color={"white"}/>
      </Link>
    </Box>
  );
}