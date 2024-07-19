import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function UserScreen({ navigation }) {
  return (
    <View>
      {/* Header Style */}
      <View style={styles.headersSty}>
        <View style={[styles.hetitlSt, styles.Setitle]}>
          <Pressable
            style={{ marginLeft: 10 }}
            onPress={() =>
              Alert.alert("Screen Share", "Currently not available")
            }
          >
            <SimpleLineIcons name="share-alt" size={20} color="black" />
          </Pressable>
          <Pressable
            style={{ marginLeft: 20 }}
            onPress={() => navigation.navigate("Notif")}
          >
            <MaterialIcons name="notifications-none" size={24} color="black" />
          </Pressable>
          <Pressable
            style={{ marginLeft: 20, marginTop: 2 }}
            onPress={() => navigation.navigate("Search")}
          >
            <Fontisto name="search" size={20} color="black" />
          </Pressable>
          <Pressable
            style={{ marginLeft: 20, marginTop: 2 }}
            onPress={() => navigation.navigate("Setting")}
          >
            <Feather name="settings" size={22} color="black" />
          </Pressable>
        </View>
      </View>
      {/* Scroll view */}
      <View style={{ height: "100%", width: "100%" }}>
        <ScrollView contentContainerStyle={styles.ScrStyle}>
          <View
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <View style={{ flexDirection: "row", margin: 10 }}>
              <Image
                source={require("../component/Images/Aks.png")}
                style={styles.imgSty}
              />
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 20,
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  AMAN KUMAR SAH
                </Text>
                <Text style={{ fontSize: 11 }}>
                  @amankumarsah . View channel "{">"}"
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>History</Text>
              <Text
                style={{
                  marginLeft: 210,
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 4,
                }}
              >
                view all
              </Text>
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Playlist</Text>
              <Text
                style={{
                  marginLeft: 210,
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 4,
                }}
              >
                view all
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  headersSty: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
  },
  hetitlSt: {
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 180,
  },
  ScrStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgSty: {
    borderRadius: 100,
    height: 80,
    width: 80,
    alignItems: "center",
  },
});
