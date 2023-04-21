import { Dimensions } from "react-native";
import { theme } from "native-base";

export const styles = {
  card: {
    flex: 1,
    width: Dimensions.get('window').width - 28,
    height: 220,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: theme.colors.gray[700],
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  cardText: {
    flex: 1,
    paddingX: 5,
    paddingY: 6,
    height: "100%",
    justifyContent: "flex-end",
  },
}