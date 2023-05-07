import { theme } from "native-base";

export const styles = {
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
    marginBottom: "8px"
  },
  card: {
    backgroundColor: "gray.800",
    borderRadius: "8px",
    borderWidth: 1,
    borderColor: "gray.600",
    marginBottom: 1,
    padding: "12px",
  },
  cardTitle: {
    fontSize: 18,
    color: "white",
  },
  cardText: {
    color: "gray.200",
    fontSize: 14
  },
  actions: {
    marginLeft: "auto",
  },
  button: {
    padding: 1,
    bg: "gray.600",
    borderWidth: 1,
    borderColor: "gray.500",
    marginLeft: 1,
    _pressed: {
      bg:"gray.700"
    }
  },
  form: {
    marginTop: "12px",
    bg: "gray.800",
  }
}