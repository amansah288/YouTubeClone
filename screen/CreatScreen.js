import { StyleSheet, Text, View } from "react-native";

export default function CreatScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Text>Creat Screen</Text>
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
