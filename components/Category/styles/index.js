import { theme } from "native-base";

export const styles = {
  category: {
    borderRadius: 12,
    height: 95,
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    bg: "gray.800",
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
  },
  categoryIcon: {
    color: theme.colors.gray[300],
    size: 36,
  },
  categoryIconBg: {
    width: 65,
    height: 65,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    bg: "gray.600",
  },
}