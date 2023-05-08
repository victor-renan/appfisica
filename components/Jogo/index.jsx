import { HStack, Link, theme, Text } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export function Jogo({ name, onPress }) {
  return (
    <Link
      bg={"gray.800"}
      padding={3}
      borderColor={"gray.700"}
      borderRadius={8}
      borderWidth={"1"}
      onPress={onPress}
    >
      <HStack alignItems={"center"}>
        <Icon name="play" size={26} color={theme.colors.amber[500]} />
        <Text bold ml={2} color={"amber.500"}>{name}</Text>
      </HStack>
    </Link>
  )
}