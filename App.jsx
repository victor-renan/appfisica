import 'react-native-gesture-handler';
import { StatusBar} from 'react-native';
import { NavigationTabs } from './components/Navigation';
import {
  NativeBaseProvider,
  Box,
} from "native-base";  


// Exporta a montagem do App
export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1}>
        <StatusBar />
        <NavigationTabs />
      </Box>
    </NativeBaseProvider>
  );
}