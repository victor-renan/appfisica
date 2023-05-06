import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { InicioScreen, InicioRoute } from '../../screens/Inicio';
import { MaterialRoute, MaterialScreen } from '../../screens/Material';
import { AtividadesRoute, AtividadesScreen } from '../../screens/Atividades';
import { VideosRoute, VideosScreen } from '../../screens/Videos';
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from './styles/TabNavigator';


export const NavigationTabsRoute = "Principal";

const Tab = createBottomTabNavigator();

export function NavigationTabs({ navigation }) {
  return (
    <Tab.Navigator screenOptions={styles.tabBar}>
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
  );
}