import React from "react";
import { Center, Heading, FormControl, VStack, Input, Button } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { sharedStyles } from "../../shared/styles";
import { instance } from "../../shared/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AdminRoute } from "../Admin";
import { useToast } from "native-base";

export const UserContext = React.createContext({
  user: null,
});

export const LoginRoute = "Acesso Restrito";

export function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const toast = useToast();

  const login = async () => {
    try {
      const response = await instance.post('users/login', { username, password });
      console.log(response.data)
      if (response.data) {
        await AsyncStorage.setItem('user', JSON.stringify(response.data));
        (<UserContext.Provider value={await AsyncStorage.getItem('user')} />)
        navigation.navigate(AdminRoute)
      } else {
        toast.show({
          description: "Usuário ou senha inválidos!"
        });
      }
    } catch (err) {
      console.log(err);
      toast.show({
        description: err.response.data.message,
        color: "red.200"
      });
    }
  }

  const handleSubmit = (event) => {
    login();
    event.preventDefault();
  }



  return (
    <Center {...sharedStyles.container}>
      <Icon name="key-outline" {...sharedStyles.formIcon} />
      <Heading {...sharedStyles.formHeading}>Acesso Restrito</Heading>
      <VStack {...sharedStyles.form}>
        <FormControl isRequired {...sharedStyles.formControl}>
          <FormControl.Label {...sharedStyles.formLabel}>Username:</FormControl.Label>
          <Input onChangeText={value => setUsername(value)} {...sharedStyles.formInput} type="text" placeholder="Digite seu username" />
        </FormControl>
        <FormControl isRequired {...sharedStyles.formControl}>
          <FormControl.Label>Password:</FormControl.Label>
          <Input onChangeText={value => setPassword(value)} {...sharedStyles.formInput} type="password" placeholder="Digite sua Password" />
        </FormControl>
        <Button onPress={(e) => handleSubmit(e)} {...sharedStyles.formButton}>Entrar</Button>
      </VStack>
    </Center>
  )
}