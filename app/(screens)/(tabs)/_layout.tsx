import { Tabs } from "expo-router";
import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../../assets/images/icon/home1.png")
                  : require("../../../assets/images/icon/home.png")
              }
              style={styles.icon}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={
                  focused
                    ? require("../../../assets/images/icon/search1.png")
                    : require("../../../assets/images/icon/search.png")
                }
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="mybook"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={styles.myBookContainer}>
              <View style={styles.myBookInnerContainer}>
                <Image
                  source={require("../../../assets/images/icon/book.png")}
                  style={styles.myBookIcon}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="like"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={
                  focused
                    ? require("../../../assets/images/icon/like1.png")
                    : require("../../../assets/images/icon/like.png")
                }
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={styles.userContainer}>
              <Image
                source={require("../../../assets/images/icon/user.jpg")}
                style={styles.userIcon}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#3a3a3a",
    height: 100,
    width: "100%",
    paddingTop: 40,
  },
  icon: {
    width: 30,
    height: 30,
  },
  myBookContainer: {
    backgroundColor: "#fff",
    width: 70,
    height: 70,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
  },
  myBookInnerContainer: {
    backgroundColor: "#3a3a3a",
    width: 69,
    height: 69,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  myBookIcon: {
    width: 50,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
  },
  userContainer: {
    width: 51,
    height: 51,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
});
