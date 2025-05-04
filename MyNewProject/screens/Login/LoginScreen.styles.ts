// screens/LoginScreen.styles.ts
import { StyleSheet } from "react-native";
import { Variables } from "../../assets/variables/variables";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Variables.secondColor,
    alignItems: "center",
    justifyContent: "center",
  },
  logoWrapper: {
    marginBottom: 132,
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 292,
    height: 116,
  },
  iconWrapper: {
    marginBottom: 133,
  },
  iconYoutube: {
    width: 128,
    height: 128,
  },
  contentWrapper: {
    width: 327,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 22,
    color: Variables.mainColor,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
    lineHeight: 24,
    fontWeight: "600",
    marginBottom: 32,
    alignSelf: "stretch",
  },
  button: {
    backgroundColor: Variables.buttonColor,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 36,
    width: "100%",
  },
  buttonText: {
    color: Variables.mainColor,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  terms: {
    fontSize: 13,
    color: Variables.mainColor,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    marginBottom: 55,
    fontWeight: 400,
    lineHeight: 16,
  },
  linkText: {
    textDecorationLine: "underline",
    color: Variables.buttonColor,
  },
});
