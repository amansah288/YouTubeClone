import { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function Notification({ navigation }) {
  [search, setSearch] = useState("");

  console.log(search);

  return (
    <View style={styles.headersSty}>
      <View style={styles.hetitlSt}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Notification</Text>
      </View>
      <View style={[styles.hetitlSt, styles.Setitle]}>
        <Pressable
          style={{ marginLeft: 10 }}
          onPress={() => Alert.alert("Screen Share", "Currently not available")}
        >
          <SimpleLineIcons name="share-alt" size={20} color="black" />
        </Pressable>
        <Pressable
          style={{ marginLeft: 20, marginTop: 2 }}
          onPress={() => navigation.navigate("Search")}
        >
          <Fontisto name="search" size={20} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    alignItems: "center",
  },
  ScrolStyle: {
    margin: 10,
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
    marginLeft: "35%",
  },
});
