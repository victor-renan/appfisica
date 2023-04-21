import React from "react";
import { styles } from "./styles";
import { Box, Heading, Text } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";


export function Category(props) {
  return (
    <Box onTouchStart={props.onTouchStart} {...styles.category}>
      <Box {...styles.categoryIconBg}>
        <Icon name={props.icon} {...styles.categoryIcon} />
      </Box>
      <Box {...styles.categoryText}>
        <Heading {...styles.categoryHeading}>{props.title}</Heading>
        <Text {...styles.categorySub}>{props.text}</Text>
      </Box>
    </Box>
  );
}