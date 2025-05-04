import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import logo from "../../assets/icons/youtube.png";
import iconYoutube from "../../assets/images/app.png";

import { styles } from "./LoginScreen.styles";
import { Linking } from "react-native";

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>

      <View style={styles.iconWrapper}>
        <Image
          source={iconYoutube}
          style={styles.iconYoutube}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentWrapper}>
        <Text style={styles.subtitle}>
          Welcome to the best{"\n"}YouTube-based learning{"\n"}application.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.buttonText}>Log in as guest</Text>
        </TouchableOpacity>

        <Text style={styles.terms}>
          By continuing you agree with{"\n"}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL("https://example.com/terms")}
          >
            Terms and Conditions
          </Text>{" "}
          and{" "}
          <Text
            style={styles.linkText}
            onPress={() => Linking.openURL("https://example.com/privacy")}
          >
            Privacy Policy
          </Text>
        </Text>
      </View>
    </View>
  );
}
