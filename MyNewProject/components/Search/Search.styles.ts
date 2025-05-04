import { StyleSheet } from "react-native";
import { Variables } from "../../assets/variables/variables";

export const styles = StyleSheet.create({
  topWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Variables.buttonColor,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: Variables.fontFamily,
    color: Variables.buttonColor,
    marginLeft: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },

});
