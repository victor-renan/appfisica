import { theme } from "native-base";

export const styles = {
  document: {
    flexDirection: "row",
    width: "100%",
    bg: "gray.800",
    borderRadius: 8,
    paddingX: 2,
    paddingY: 2,
    alignItems: "center",
    borderWidth: 1,
    marginBottom: 2,
    borderColor: "gray.700",
  },
  documentIcon: {
    color: "white",
    size: 20,
  },
  documentName: {
    marginLeft: 5,
    marginRight: "auto",
    color: "white"
  },
  documentType: {
    color: "white",
    marginLeft: 2  
  },
  documentButton: {
    size: 8,
    bg: "amber.500",
    _pressed: { bg: "amber.700" },
  },
}