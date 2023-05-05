import React from "react";
import { styles } from "./styles";
import { Link, Box, Heading, Text, theme } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { Document } from "../Document";


export function Materia(props) {
  const [opened, setOpened] = React.useState(false);
  return (
    <React.Fragment>
      <Link id={props.id} onPress={() => setOpened(!opened)} {...styles.category}>
        <Box {...styles.categoryIconBg}>
          <Icon name={props.icon} {...styles.categoryIcon} />
        </Box>
        <Box {...styles.categoryText}>
          <Heading {...styles.categoryHeading}>{props.title}</Heading>
          <Text {...styles.categorySub}>{props.text}</Text>
        </Box>
        <Icon name="chevron-down-outline" {...styles.arrow} />
      </Link>
      {opened
        ? (
          <Box {...styles.keyframe} marginBottom={4}>
            {props.documents
              ? props.documents.map(doc=> {
                return <Document {...doc} />;
              })
              : <Text color="white">Não há aquivos para mostrar.</Text>}
          </Box>
        )
        : null}
    </React.Fragment>
  );
}