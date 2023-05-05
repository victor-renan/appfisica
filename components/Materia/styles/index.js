import { theme } from "native-base";

export const styles = {
  category: {
    borderRadius: 12,
    height: 98,
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    bg: "gray.800",
    borderWidth: 1,
    borderColor: "gray.700"
  },
  categoryText: {
    flex: 1,
    paddingLeft: 3,
  },
  categoryHeading: {
    fontSize: 22,
    color: "white",
  },
  categorySub: {
    color: "gray.400",
    fontSize: 13
  },
  categoryIcon: {
    color: theme.colors.gray[400],
    size: 36,
  },
  categoryIconBg: {
    width: "64px",
    height: "64px",
    borderRadius: "8px",
    justifyContent: "center",
    alignItems: "center",
    bg: "gray.600",
  },
  arrow: {
    size: 26,
    color: theme.colors.amber[400],
  }
}