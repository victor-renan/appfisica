import 'react-native-gesture-handler';
import { StatusBar} from 'react-native';
import { NavigationTabs } from './components/Navigation';
import {
  NativeBaseProvider,
  View,
  theme
} from "native-base";  


// Exporta a montagem do App
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <View flex={1}>
        <StatusBar />
        <NavigationTabs />
      </View>
    </NativeBaseProvider>
  );
}