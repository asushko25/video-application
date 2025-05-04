import { StyleSheet } from "react-native";
import { Variables } from "../../assets/variables/variables";

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 320,
    height: 400,
    backgroundColor: Variables.secondColor,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 24,
    color: Variables.mainColor,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    fontSize: 14,
    fontWeight: "400",
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Variables.mainColor,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 24,
  },
  selectedCircle: {
    height: 14,
    width: 14,
    borderRadius: 5,
    backgroundColor: Variables.buttonColor,
  },
  optionText: {
    color: Variables.mainColor,
    fontSize: 14,
  },
  confirmButton: {
    marginTop: 128,
    backgroundColor: Variables.buttonColor,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 32,
  },
  confirmText: {
    color: Variables.mainColor,
    fontWeight: "bold",
    fontSize: 14,
  },
});
