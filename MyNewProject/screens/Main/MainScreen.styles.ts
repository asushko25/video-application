import { StyleSheet } from "react-native";
import { Variables } from "../../assets/variables/variables";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: Variables.mainColor,
  },
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
    marginRight: 12,
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
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 18,
    color: Variables.buttonColor,
    fontWeight: 600,
    lineHeight: 24,
  },
  showMore: {
    fontSize: 12,
    color: Variables.buttonColor,
    textDecorationLine: "underline",
    fontWeight: 400,
  },
  videoCard: {
    width: 180,
    marginRight: 12,
  },
  thumbnail: {
    width: 180,
    height: 112,
    borderRadius: 8,
    marginBottom: 6,
  },
  videoTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: Variables.buttonColor,
  },
  dateText: {
    fontSize: 12,
    color: Variables.buttonColor,
    marginTop: 4,
  },
});
