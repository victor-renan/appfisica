import React from "react";
import { Center, Heading, FormControl, VStack, Input, Button } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import { sharedStyles } from "../../shared/styles";

export const LoginRoute = "Login"

export function LoginScreen() {
  return (
    <Center {...sharedStyles.container}>
      <Icon name="key-outline" {...sharedStyles.formIcon} />
      <Heading {...sharedStyles.formHeading}>Acesso Restrito</Heading>
      <VStack {...sharedStyles.form}>
        <FormControl isRequired {...sharedStyles.formControl}>
          <FormControl.Label {...sharedStyles.formLabel}>Username:</FormControl.Label>
          <Input {...sharedStyles.formInput} type="text" placeholder="Digite seu username" />
        </FormControl>
        <FormControl isRequired {...sharedStyles.formControl}>
          <FormControl.Label>Senha:</FormControl.Label>
          <Input {...sharedStyles.formInput} type="password" placeholder="Digite sua senha" />
        </FormControl>
        <Button {...sharedStyles.formButton}>Entrar</Button>
      </VStack>
    </Center>
  )
}