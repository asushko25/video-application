import React, { useRef } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import Video from "react-native-video";
import BackIcon from "../../assets/icons/back-icon.svg";
import FullScreenIcon from "../../assets/icons/fullscreen-icon.svg";
import ChannelIcon from "../../assets/icons/channel-name.svg";
import ViewIcon from "../../assets/icons/views-icon.svg";
import LikeIcon from "../../assets/icons/likes-icon.svg";
import { styles } from "./DetailScreen.styles";

interface RouteParams {
  video: any;
}

export default function VideoDetailsScreen() {
  const route = useRoute<RouteProp<{ params: RouteParams }, "params">>();
  const navigation = useNavigation();
  const video = route.params.video;

  const playerRef = useRef<any>(null);

  return (
    <View style={styles.container}>
      <View style={styles.videoWrapper}>
        <Video
          ref={playerRef}
          source={{
            uri: "https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
          }}
          style={styles.video}
          controls
          resizeMode="contain"
        />

        <TouchableOpacity
          style={styles.absoluteBackButton}
          onPress={() => navigation.goBack()}
        >
          <BackIcon width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fullScreenButton}
          onPress={() => {
            if (playerRef.current?.presentFullscreenPlayer) {
              playerRef.current.presentFullscreenPlayer();
            }
          }}
        >
          <FullScreenIcon width={20} height={20} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.contentContainer}>
        <View style={styles.meta}>
          <Text style={styles.title} numberOfLines={2}>
            {video.snippet?.title}
          </Text>

          <View style={styles.channelRow}>
            <ChannelIcon width={48} height={48} />
            <Text style={styles.channelName}>
              {video.snippet?.channelTitle}
            </Text>
          </View>
        </View>

        <View style={styles.tabs}>
          <Text style={styles.activeTab}>Details</Text>
          <Text style={styles.inactiveTab}>Notes</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{video.snippet?.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Statistics</Text>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <ViewIcon width={20} height={20} fill="#ffffff" />
              <Text style={styles.statValue}>25268952</Text>
              <Text style={styles.statLabel}>views</Text>
            </View>

            <View style={styles.statItem}>
              <LikeIcon width={20} height={20} fill="#ffffff" />
              <Text style={styles.statValue}>12345</Text>
              <Text style={styles.statLabel}>likes</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
