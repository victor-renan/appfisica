import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationDrawer } from './components/Navigation';
import { NativeBaseProvider, View } from "native-base";


// Exporta a montagem do App
export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style='auto' />
      <View flex={1}>
        <NavigationContainer>
          <NavigationDrawer />
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
}