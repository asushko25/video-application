import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./MainScreen.styles";
import SearchIcon from "../../assets/icons/search.svg";
import SettingsIcon from "../../assets/icons/settings-icon.svg";
import Footer from "../../components/Footer/Footer";

const API_KEY = process.env.EXPO_PUBLIC_YOUTUBE_API_KEY;
const CATEGORIES = ["React Native", "React", "Typescript", "Javascript"];

export default function MainScreen({ navigation }: any) {
  const [searchText, setSearchText] = useState("");
  const [videos, setVideos] = useState<{ [key: string]: any[] }>({});

  useEffect(() => {
    const fetchData = async () => {
      for (const category of CATEGORIES) {
        try {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=6&q=${encodeURIComponent(
              category
            )}&key=${API_KEY}`
          );
          const data = await response.json();
          setVideos((prev) => ({
            ...prev,
            [category]: data.items || [],
          }));
        } catch (error) {
          console.error(`Error loading ${category}:`, error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.topWrapper}>
          <View style={styles.searchWrapper}>
            <SearchIcon style={styles.icon} height={24} width={24} />
            <TextInput
              style={styles.input}
              placeholder="Search videos"
              placeholderTextColor="rgba(43, 45, 66, 0.6)"
              value={searchText}
              onChangeText={setSearchText}
              onFocus={() =>
                navigation.navigate("Search", { category: searchText })
              }
            />
          </View>
          <SettingsIcon style={styles.icon} />
        </View>

        {CATEGORIES.map((category) => (
          <View key={category} style={{ marginTop: 23 }}>
            <View style={styles.categoryHeader}>
              <Text style={styles.categoryTitle}>{category}</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Search", { category })}
              >
                <Text style={styles.showMore}>Show more</Text>
              </TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {videos[category]?.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate("VideoDetails", { video: item })
                  }
                  style={styles.videoCard}
                >
                  <Image
                    source={{ uri: item.snippet?.thumbnails?.medium?.url }}
                    style={styles.thumbnail}
                  />
                  <Text numberOfLines={2} style={styles.videoTitle}>
                    {item.snippet?.title}
                  </Text>
                  <Text style={styles.dateText}>
                    {new Date(item.snippet?.publishedAt).toLocaleDateString()}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>

      <Footer navigation={navigation} />
    </View>
  );
}
