import SearchIcon from "../../assets/icons/search.svg";
import React from "react";
import { View, TextInput } from "react-native";
import { styles } from "./Search.styles";

const Search = ({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText: (text: string) => void;
}) => {
  return (
    <View style={styles.topWrapper}>
      <View style={styles.searchWrapper}>
        <SearchIcon style={styles.icon} height={24} width={24} />
        <TextInput
          style={styles.input}
          placeholder="Search videos"
          placeholderTextColor="#2B2D42"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
    </View>
  );
};

export default Search;
