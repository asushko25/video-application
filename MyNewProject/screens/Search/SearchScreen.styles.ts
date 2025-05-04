import { StyleSheet } from "react-native";
import { Variables } from "../../assets/variables/variables";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: Variables.mainColor,
  },

  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Variables.buttonColor,
  },
  showMore: {
    fontSize: 14,
    color: Variables.buttonColor,
    textDecorationLine: "underline",
  },

  videoCard: {
    backgroundColor: Variables.mainColor,
    marginBottom: 24,
    overflow: "hidden",
  },

  thumbnail: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: "cover",
  },

  channelName: {
    fontSize: 12,
    fontWeight: "700",
    color: Variables.buttonColor,
    marginBottom: 4,
    lineHeight: 12,
    paddingTop: 16,
  },

  videoTitle: {
    fontSize: 15,
    color: Variables.buttonColor,
    lineHeight: 12,
    paddingTop: 12,
    fontWeight: "400",
  },

  dateText: {
    fontSize: 10,
    color: Variables.buttonColor,
    textAlign: "right",
    marginTop: 12,
    fontWeight: "400",
    lineHeight: 24,
  },

  resultsText: {
    fontSize: 10,
    color: Variables.buttonColor,
    marginTop: 10,
    fontWeight: "400",
  },
  sortText: {
    marginTop: 2,
    marginBottom: 12,
    fontSize: 12,
    fontWeight: "400",
    color: Variables.buttonColor,
    textAlign: "right",
    lineHeight: 24,
  },

  sortValueText: {
    marginTop: 2,
    marginBottom: 12,
    fontSize: 12,
    fontWeight: "bold",
    color: Variables.buttonColor,
    textAlign: "right",
    lineHeight: 24,
  },
});
