import { Button, StyleSheet, View } from "react-native";

export default function SVScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Button
        title="Start Video"
        onPress={() => navigation.navigate("ShortVideo")}
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
