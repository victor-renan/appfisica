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
      height: 68,
      borderBottomWidth: 0.5,
    },
    headerRightContainerStyle: {
      paddingRight: 8,
    },
    headerTitle: "StudyHub",
    headerTintColor: theme.colors.gray[100],
    headerTitleStyle: {
      fontSize: 18,
    },
    drawerStyle: {
      backgroundColor: theme.colors.gray[900]
    },
    drawerActiveTintColor: theme.colors.amber[400],
    drawerInactiveTintColor: theme.colors.gray[400],
  }
}