import 'react-native-gesture-handler'
import { StyleSheet, StatusBar, AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { InicioScreen, InicioRoute } from './screens/Inicio';
import { MaterialRoute, MaterialScreen } from './screens/Material';
import { AtividadesRoute, AtividadesScreen } from './screens/Atividades';
import { VideosRoute, VideosScreen } from './screens/Videos';

import { Tab, NavigationContainer } from './application/Navigation';

import {
  NativeBaseProvider,
  Text,
  Box,
  View,
  Container,
  Center,
  theme
} from "native-base";  

const NavigationTabs = ( navigation ) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{

          tabBarStyle: {
            height: 72,
            borderTopColor: theme.colors.gray[400],
            backgroundColor: theme.colors.gray[900],
          },
          headerStyle: {
            backgroundColor: theme.colors.gray[900],
            borderBottomWidth: 0.5,
            borderBottomColor: theme.colors.gray[700],
          },
          headerTintColor: theme.colors.gray[100],
          headerTitleStyle: {
            fontSize: 18
          },
          tabBarActiveTintColor: theme.colors.darkBlue[400],
          tabBarItemStyle: {
            margin: 6,
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
        }}
      >
        <Tab.Screen
          name={InicioRoute}
          component={InicioScreen}
          options={{
            tabBarIcon: ({ color }) => { return <Icon name='home-outline' size={26} color={color} /> },
          }}
        />
        <Tab.Screen
          name={MaterialRoute}
          component={MaterialScreen}
          options={{
            tabBarIcon: ({ color }) => { return <Icon name='book-outline' size={26} color={color} /> },
          }}
        />
        <Tab.Screen
          name={AtividadesRoute}
          component={AtividadesScreen}
          options={{
            tabBarIcon: ({ color }) => { return <Icon name='play-outline' size={26} color={color} /> },
          }}
        />
        <Tab.Screen 
          name={VideosRoute}
          component={VideosScreen}
          options={{
            tabBarIcon: ({ color }) => { return <Icon name='film-outline' size={26} color={color} /> },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

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