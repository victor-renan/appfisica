import React from "react";
import { styles } from "./styles";
import { Link, Box, Heading, Text, theme } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { Document } from "../Document";


export function Materia({ name, description, items, icon }) {
  const [opened, setOpened] = React.useState(false);
  return (
    <React.Fragment>
      <Link onPress={() => setOpened(!opened)} {...styles.category}>
        <Box {...styles.categoryIconBg}>
          <Icon name={icon == "atividades" ? "document" : icon == "materiais" ? "book" : "information"} {...styles.categoryIcon} />
        </Box>
        <Box {...styles.categoryText}>
          <Heading {...styles.categoryHeading}>{name}</Heading>
          <Text {...styles.categorySub}>{description}</Text>
        </Box>
        <Icon name="chevron-down-outline" {...styles.arrow} />
      </Link>
      {opened
        ? (items.length > 0
          ? (
            <Box marginBottom={4}>
              {items.map(item => {
                return <Document key={item._id} {...item} />;
              })}
            </Box>
          )
          : <Text italic color={"amber.500"} marginBottom={2}>Não há aquivos para mostrar.</Text>
        )
        : null}
    </React.Fragment>
  );
}