import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./Footer.styles";

import HomeIconMain from "../../assets/icons/mainhome-icon.svg";
import SearchIconMain from "../../assets/icons/mainsearch-icon.svg";
import HomeIconSearch from "../../assets/icons/searchhome-icon.svg";
import SearchIconSearch from "../../assets/icons/search-icon.svg";

const Footer = ({ navigation }: any) => {
  const route = useRoute();
  const currentRoute = route.name;

  const isMainActive = currentRoute === "Main";
  const isSearchActive = currentRoute === "Search";

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate("Main")}
      >
        {isMainActive ? (
          <HomeIconMain width={32} height={32} />
        ) : (
          <HomeIconSearch width={32} height={32} />
        )}
        <Text
          style={[
            styles.footerText,
            { color: isMainActive ? "#2B2D42" : "#fff" },
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate("Search")}
      >
        {isSearchActive ? (
          <SearchIconSearch width={32} height={32} />
        ) : (
          <SearchIconMain width={32} height={32} />
        )}
        <Text
          style={[
            styles.footerText,
            { color: isSearchActive ? "#2B2D42" : "#fff" },
          ]}
        >
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
