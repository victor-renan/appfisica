import { theme } from "native-base";

export const styles = {
  tabBar: {
    tabBarStyle: {
      height: 72,
      borderTopColor: theme.colors.gray[600],
      backgroundColor: theme.colors.gray[900],
      borderTopWidth: 0.5,
    },
    headerStyle: {
      backgroundColor: theme.colors.gray[900],
      borderBottomColor: theme.colors.gray[600],
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
    tabBarLabelStyle: {
      fontSize: 15,
    },
  }
}