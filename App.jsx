import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { InicioScreen, InicioRoute } from './screens/Inicio';

import Icon from 'react-native-vector-icons/Ionicons';

import { ConteudoRoute, ConteudoScreen } from './screens/Conteudo';
import { AtividadesRoute, AtividadesScreen } from './screens/Atividades';
import { VideosRoute, VideosScreen } from './screens/Videos';

import {
  NativeBaseProvider,
  Text,
  Box,
  View,
  Container,
  Center,
  theme
} from "native-base";  

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 72,
          },
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
            animationEnabled: false,
          }}
        />
        <Tab.Screen
          
          name={ConteudoRoute}
          component={ConteudoScreen}
          options={{
            tabBarIcon: ({ color }) => { return <Icon name='book-outline' size={26} color={color} /> },
            animationEnabled: false,
          }}
        />
        <Tab.Screen
          
          name={AtividadesRoute}
          component={AtividadesScreen}
          options={{
            tabBarIcon: ({ color }) => { return <Icon name='play-outline' size={26} color={color} /> },
            animationEnabled: false,
          }}
        />
        <Tab.Screen
          
          name={VideosRoute}
          component={VideosScreen}
          options={{
            tabBarIcon: ({ color }) => { return <Icon name='film-outline' size={26} color={color} /> },
            animationEnabled: false,
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