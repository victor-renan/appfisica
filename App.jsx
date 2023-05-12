import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationDrawer } from './components/Navigation';
import { NativeBaseProvider, View } from "native-base";


// Exporta a montagem do App
export default function App() {
  return (
    <NativeBaseProvider>
      <View flex={1}>
        <StatusBar />
        <NavigationContainer>
          <NavigationDrawer />
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
}