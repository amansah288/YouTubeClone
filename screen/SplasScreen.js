import { Image, StyleSheet, Text, View } from "react-native";

export default function SplasScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <Image source={require("../component/Images/YTL.png")} />
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
