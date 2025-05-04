import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { styles } from "./SearchScreen.styles";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import { FilterOptions } from "../../types/FilterOptions";
import FilterModal from "../../components/FilterModal/FilterModal";

const API_KEY = "AIzaSyDXI7OwF8WlJ2tIOy212-E2S5t89tK32Is";

export default function SearchScreen({ navigation }: any) {
  const route =
    useRoute<RouteProp<{ params?: { category?: string } }, "params">>();
  const [searchText, setSearchText] = useState(route.params?.category || "");
  const [videos, setVideos] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [totalResults, setTotalResults] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<FilterOptions>(
    FilterOptions.Popular
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText.trim()) {
        fetchVideos(searchText);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchText, selectedFilter]);

  const fetchVideos = async (query: string) => {
    try {
      let orderParam = "relevance";
      if (selectedFilter === FilterOptions.Latest) orderParam = "date";
      else if (selectedFilter === FilterOptions.Popular)
        orderParam = "viewCount";

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(
          query
        )}&order=${orderParam}&key=${API_KEY}`
      );
      const data = await response.json();
      setVideos(data.items || []);
      setTotalResults(data.pageInfo?.totalResults || null);
    } catch (error) {
      console.error("Failed to load videos:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Search searchText={searchText} setSearchText={setSearchText} />

        {searchText.trim() && totalResults !== null && (
          <Text style={styles.resultsText}>
            {videos.length} results found for:{" "}
            <Text style={{ fontWeight: "bold" }}>“{searchText}”</Text>
          </Text>
        )}

        {searchText.trim() && (
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Text style={styles.sortText}>
              Sort by:{" "}
              <Text style={styles.sortValueText}>
                {selectedFilter === "popular"
                  ? "Most popular"
                  : selectedFilter === "latest"
                  ? "Latest"
                  : "Oldest"}
              </Text>
            </Text>
          </TouchableOpacity>
        )}

        <FilterModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          selected={selectedFilter}
          onSelect={(filter) => {
            setSelectedFilter(filter);
            setIsModalVisible(false);
          }}
        />

        <View>
          {videos.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("VideoDetails", { video: item })
              }
            >
              <View style={styles.videoCard}>
                <Image
                  source={{ uri: item.snippet?.thumbnails?.medium?.url }}
                  style={styles.thumbnail}
                />
                <View style={{ paddingLeft: 8 }}>
                  <Text style={styles.channelName}>
                    {item.snippet?.channelTitle || "Channel name"}
                  </Text>
                  <Text numberOfLines={2} style={styles.videoTitle}>
                    {item.snippet?.description ||
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
                  </Text>
                  <Text style={styles.dateText}>
                    {new Date(item.snippet?.publishedAt).toLocaleDateString()}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Footer navigation={navigation} />
    </View>
  );
}
