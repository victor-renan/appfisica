import { theme } from "native-base";


export const sharedStyles = {
  container: {
    flex: 1,
    padding: "16px",
    backgroundColor: 'gray.900',
  },
  section: {
    paddingY: 1,
    marginBottom: 3
  },
  formIcon: {
    color: theme.colors.amber[300],
    size: 40,
    marginBottom: 12,
  },
  formHeading: {
    fontSize: 24,
    fontWeight: 900,
    color: "white",
    marginBottom: "16px"
  },
  form: {
    width: "100%",
  },
  formControl: {
    marginBottom: "8px",
    
  },
  formLabel: {
    fontSize: 15,
    color: "gray.100"
  },
  formInput: {
    fontSize: 15,
    color: "white",
    borderColor: "gray.500",
  },
  formButton: {
    bg: "amber.500",
    _pressed: { bg: "amber.700" },
    marginTop: "16px",
    marginBottom: "16px",
    size: "lg",
    borderRadius: 8,
  },
}