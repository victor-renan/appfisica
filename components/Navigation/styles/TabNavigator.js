import { theme } from "native-base";

export const styles = {
  tabBar: {
    headerShown: false,
    tabBarStyle: {
      height: 72,
      borderTopColor: theme.colors.gray[600],
      backgroundColor: theme.colors.gray[900],
      borderTopWidth: 0.5,
    },
    tabBarLabelStyle: {
      fontSize: 12
    },
    headerStyle: {
      backgroundColor: theme.colors.gray[900],
      borderBottomColor: theme.colors.gray[600],
      height: 64,
      borderBottomWidth: 0.5,
    },
    headerTintColor: theme.colors.gray[100],
    headerTitleStyle: {
      fontSize: 18
    },
    tabBarActiveTintColor: theme.colors.amber[400],
    tabBarItemStyle: {
      margin: 6,
    },
  }
}