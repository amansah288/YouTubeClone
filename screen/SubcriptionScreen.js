import { StyleSheet, Text, View } from "react-native";

export default function SubcriptionScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Text>Subcription Screen</Text>
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
