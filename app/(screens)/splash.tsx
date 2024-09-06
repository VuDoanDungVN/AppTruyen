import { View, Text, Image, useWindowDimensions } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    setTimeout(() => {
      router.push("/(tabs)");
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#5E5E5E",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 40, color: "#fff", fontWeight: 600 }}>
        STORY
      </Text>
      <Image
        source={require("../../assets/images/songam.png")}
        style={{ width: 80, height: 80 }}
      />
      <Text style={{ marginTop: 20, color: "#fff" }}>LOADING...</Text>
    </View>
  );
}
