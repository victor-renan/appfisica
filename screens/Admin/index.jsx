import React from "react";
import { Center, FlatList, FormControl, HStack, Text, VStack, Box, Button, Input, TextArea } from "native-base";
import { Title } from "../../components/Title";
import { sharedStyles } from "../../shared/styles";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

export const AdminRoute = "Admin"

export function AdminScreen() {
  return (
    <Center {...sharedStyles.container} justifyContent={"flex-start"}>
      <Title icon="hammer-outline" text="Painel" />
      <VStack {...sharedStyles.form}>
        <Text {...styles.text}>Matérias</Text>

        <FlatList data={[1, 2, 3]} renderItem={({ item }) => (
          <Box {...styles.card}>
            <VStack>
              <HStack marginBottom={2}>
                <Text {...styles.cardTitle}>{item} Renan</Text>
                <HStack {...styles.actions}>
                  <Button {...styles.button}>
                    <Icon name="pencil-outline" color="white" size={18} />
                  </Button>
                  <Button {...styles.button}>
                    <Icon name="trash-outline" color="white" size={18} />
                  </Button>
                </HStack>
              </HStack>
              <Text {...styles.cardText}>Lorem ipsum dolor sit amet consequotuir adspicing elit</Text>
            </VStack>
          </Box>
        )} />
        <VStack {...styles.form}>
          <FormControl>
            <Input {...sharedStyles.formInput} type="text"></Input>
            <TextArea></TextArea>
          </FormControl>
        </VStack>
      </VStack>
    </Center >
  );
}