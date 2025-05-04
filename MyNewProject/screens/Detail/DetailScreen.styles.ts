import { StyleSheet, Platform } from "react-native";
import { Variables } from "../../assets/variables/variables";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Variables.mainColor,
  },
  videoWrapper: {
    width: "100%",
    height: 220,
    backgroundColor: "#000",
    position: "relative",
    zIndex: 1,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  absoluteBackButton: {
    position: "absolute",
    top: 18,
    left: 16,
    zIndex: 2,
    backgroundColor: "rgba(rgba(0, 0, 0, 0.25)",
    borderRadius: 16,
    padding: 6,
    width: 32,
    height: 32,
  },

  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 20,
    backgroundColor: "Variables.mainColor",
  },
  backButton: {
    marginBottom: 12,
  },
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  meta: {
    marginTop: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Variables.buttonColor,
  },
  channelName: {
    fontSize: 14,
    color: Variables.buttonColor,
    lineHeight: 12,
    fontWeight: 700,
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 12,
    marginTop: 19,
    borderBottomWidth: 2,
    borderBottomColor: "#C8C8C8",
  },
  activeTab: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 8,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: Variables.buttonColor,
    fontSize: 12,
  },
  inactiveTab: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 8,
    color: Variables.buttonColor,
    fontWeight: "bold",
    fontSize: 12,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 12,
    fontFamily: Variables.fontFamily,
  },
  description: {
    fontSize: 12,
    color: Variables.buttonColor,
    fontWeight: "400",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Variables.buttonColor,
    borderRadius: 8,
    width: 136,
    height: 32,
    paddingLeft: 8,
  },
  statValue: {
    color: Variables.mainColor,
    fontWeight: "600",
    fontSize: 10,
    marginLeft: 8,
    lineHeight: 12,
  },
  statLabel: {
    color: Variables.mainColor,
    fontSize: 12,
    marginLeft: 4,
  },
  channelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 8,
  },
  icon: {
    paddingLeft: 8,
  },
  fullScreenButton: {
    position: "absolute",
    bottom: 30,
    right: 56,
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: 16,
    padding: 6,
    width: 32,
    height: 32,
    color: Variables.mainColor,
    justifyContent: "center",
    alignItems: "center",
  },
});
