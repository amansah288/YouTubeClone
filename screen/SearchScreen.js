import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export default function SearchScreen({ navigation }) {
  [search, setSearch] = useState("");

  console.log(search);

  return (
    <View style={styles.headersSty}>
      <View style={styles.hetitlSt}>
        <Image
          src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000"
          style={{ height: 30, width: 35 }}
        />
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={(txt) => setSearch(txt)}
          style={{
            borderWidth: 1,
            borderRadius: 20,
            width: "80%",
            marginLeft: 10,
            height: 35,
            paddingLeft: 10,
            fontWeight: "bold",
            paddingRight: 10,
          }}
        />
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
    marginLeft: "20%",
  },
});
