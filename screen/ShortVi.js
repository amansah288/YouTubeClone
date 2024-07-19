import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Video } from "expo-av";
import { useRef, useState } from "react";

export default function ShortVi({ navigation }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={[
          require("../component/Video/video1.mp4"),
          require("../component/Video/video2.mp4"),
          require("../component/Video/video3.mp4"),
          require("../component/Video/video4.mp4"),
        ]}
        onScroll={(e) => {
          setSelectedIndex(
            e.nativeEvent.contentOffset.y.toFixed(0) /
              Dimensions.get("window").height
          );
        }}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height,
              }}
            >
              <Video
                style={{
                  width: Dimensions.get("window").width,
                  height: Dimensions.get("window").height,
                }}
                ref={videoRef}
                source={item}
                resizeMode={"cover"}
                shouldPlay={selectedIndex == index ? true : false}
                isLooping
                //useNativeControls
              />
              <TouchableOpacity
                style={{
                  width: Dimensions.get("window").width,
                  height: Dimensions.get("window").height,
                  position: "absolute",
                  justifyContent: "center",
                  alignItems: "center",
                  top: 0,
                  backgroundColor: "rgba(0,0,0,0.1)",
                }}
                onPress={() => {
                  if (selectedIndex == -1) {
                    setSelectedIndex(index);
                  } else {
                    setSelectedIndex(-1);
                  }
                }}
              >
                {selectedIndex == -1 ? (
                  <Image
                    source={require("../component/Images/pause.png")}
                    style={{
                      height: 50,
                      backgroundColor: "#fff",
                      borderRadius: 25,
                      width: 50,
                    }}
                  />
                ) : null}
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
