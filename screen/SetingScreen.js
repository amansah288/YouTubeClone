import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { supabase } from "../Auth/Client";

export default function SetingScreen({ navigation }) {
  async function LogOutHandler() {
    //console.log("Log Out");

    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      } else {
        // Navigate to the login screen or any other screen after logout
        navigation.replace("Auth"); // Replace 'LoginScreen' with your actual login screen route name
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error.message);
    }
  }

  return (
    <View>
      <View style={styles.headersSty}>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 50,
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Setting
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text style={{ fontWeight: "bold", marginVertical: 15 }}>General</Text>
        <Text style={{ fontWeight: "bold", marginVertical: 15 }}>Account</Text>
        <Text style={{ fontWeight: "bold", marginVertical: 15 }}>
          Data Saving
        </Text>
        <Text style={{ fontWeight: "bold", marginVertical: 15 }}>
          Auto-play
        </Text>
        <Text style={{ fontWeight: "bold", marginVertical: 15 }}>
          Video-quality preference
        </Text>
        <Text style={{ fontWeight: "bold", marginVertical: 15 }}>
          Downloads
        </Text>
        <Text style={{ fontWeight: "bold", marginVertical: 15 }}>
          Watch on TV
        </Text>
        <Text style={{ fontWeight: "bold", marginVertical: 15 }}>
          Manage all history
        </Text>
        <Text style={{ fontWeight: "bold", marginVertical: 15 }}>
          Your data in youtube
        </Text>
        <Pressable onPress={LogOutHandler}>
          <Text style={{ fontWeight: "bold", marginVertical: 15 }}>
            Log Out
          </Text>
        </Pressable>
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
