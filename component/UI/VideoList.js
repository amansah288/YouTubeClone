import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Video } from "expo-av";
import { supabase } from "../../Auth/Client";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoUrls = async () => {
      try {
        const { data, error } = await supabase.storage
          .from("videos") // Your bucket name
          .list("public"); // Assuming your videos are in the 'public' folder

        if (error) {
          setError("Error fetching video list: " + error.message);
          return;
        }

        const videoUrls = await Promise.all(
          data.map(async (file) => {
            const { data: urlData, error: urlError } = await supabase.storage
              .from("videos")
              .getPublicUrl(`public/${file.name}`);

            if (urlError) {
              setError("Error fetching video URL: " + urlError.message);
              return null;
            }

            return {
              name: file.name,
              url: urlData.publicUrl,
            };
          })
        );

        setVideos(videoUrls.filter((url) => url !== null));
        console.log(videos);
        setLoading(false);
      } catch (fetchError) {
        setError("An unexpected error occurred: " + fetchError.message);
      }
    };

    fetchVideoUrls();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.videoContainer}>
      <Text>{item.name}</Text>
      <Video
        source={{ uri: item.url }}
        style={styles.video}
        controls={true}
        resizeMode="contain"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  videoContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  video: {
    width: 300,
    height: 200,
    borderWidth: 1,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

export default VideoList;
