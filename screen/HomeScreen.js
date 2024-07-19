import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { fetchVideos } from "../Auth/FVideo";
import { useState, useEffect } from "react";
import { supabaseStorage } from "../Auth/StorageL";
import VideoList from "../component/UI/VideoList";

export default function HomeScreen({ navigation }) {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <View>
      {/* Header code */}
      <View style={styles.headersSty}>
        <View style={styles.hetitlSt}>
          <Image
            src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000"
            style={{ height: 30, width: 35 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 5 }}>
            YouTube
          </Text>
        </View>
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
        </View>
      </View>
      {/* Video Displaying Code */}
      <View style={styles.container}>
        <VideoList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    borderWidth: 1,
    height: "100%",
    width: "100%",
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
    marginLeft: 20,
  },
  Setitle: {
    marginLeft: "20%",
  },
  video: {
    width: "100%",
    height: 300,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    //borderWidth: 1,
  },
});
