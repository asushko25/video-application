import { StyleSheet } from 'react-native';
import { Variables } from "../../assets/variables/variables";

export default StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Variables.secondColor,
    paddingVertical: 12,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    marginTop: 4,
    fontSize: 16,
    color: Variables.mainColor,
    fontWeight: '400',
    lineHeight: 24,
  },
});
