import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationDrawer } from './components/Navigation';
import { NativeBaseProvider, Box} from "native-base";


// Exporta a montagem do App
export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1}>
        <StatusBar />
        <NavigationContainer>
          <NavigationDrawer />
        </NavigationContainer>
      </Box>
    </NativeBaseProvider>
  );
}