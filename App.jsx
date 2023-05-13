import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationDrawer } from './components/Navigation';
import { NativeBaseProvider, View, theme } from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';


// Exporta a montagem do App
export default function App() {
  return (

    <SafeAreaView flex={1}>
      <NativeBaseProvider>
        <StatusBar style='light' backgroundColor={theme.colors.gray[900]} />
        <NavigationContainer>
          <NavigationDrawer />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>

  );
}