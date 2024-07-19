import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { supabase } from "../Auth/Client";
import { useState } from "react";
import * as Sentry from "@sentry/react-native";

export default function AuthScreen({ navigation }) {
  const [newCont, setNewCont] = useState(true);
  const [main, setMain] = useState(false);

  const [email, setEmail] = useState("");
  const [Cnfemail, setCnfEmail] = useState("");
  const [password, setpassword] = useState("");
  const [Cnfpassword, setCnfpassword] = useState("");

  const [Token, setToken] = useState(false);

  console.log(email);
  console.log(password);
  console.log(Cnfemail);
  console.log(Cnfpassword);

  async function LoginHandler() {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) throw error;
      //console.log(data);
      const ids = data.user.id;

      if (data.user.aud == "authenticated") {
        navigation.replace("All");
      } else {
        Alert.alert("Error");
      }
    } catch (error) {
      let errorMessage = "An error occurred";
      if (error.message) {
        errorMessage = error.message; // Use the error message if available
      }

      Alert.alert("Error", errorMessage);
    }
  }

  async function CreatHandler() {
    //e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: Cnfemail,
        password: Cnfpassword,
      });

      if (error) throw error;
      console.log(error);
    } catch (error) {
      console.error(error); // Log the full error object to the console

      let errorMessage = "An error occurred";
      if (error.message) {
        errorMessage = error.message; // Use the error message if available
      }

      Alert.alert("Error", errorMessage);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.InnerCont}>
        {newCont ? (
          <>
            <TextInput
              placeholder="Enter Your Email"
              style={styles.InpTxt}
              value={email}
              onChangeText={(txt) => setEmail(txt)}
            />
            <TextInput
              placeholder="Enter Your Password"
              style={styles.InpTxt}
              value={password}
              onChangeText={(txt) => setpassword(txt)}
            />
            <Pressable
              style={[styles.InpTxt, styles.Mtop]}
              onPress={LoginHandler}
            >
              <Text style={{ fontWeight: "bold" }}>Login</Text>
            </Pressable>
            <Pressable onPress={() => setNewCont(false)}>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 10,
                }}
              >
                Creat new Account
              </Text>
            </Pressable>
          </>
        ) : (
          <>
            <TextInput
              placeholder="Enter Email"
              style={styles.InpTxt}
              value={email}
              onChangeText={(txt) => setEmail(txt)}
            />
            <TextInput
              placeholder="Confirm Email"
              style={styles.InpTxt}
              value={Cnfemail}
              onChangeText={(txt) => setCnfEmail(txt)}
            />
            <TextInput
              placeholder="Enter Password"
              style={styles.InpTxt}
              value={password}
              onChangeText={(txt) => setpassword(txt)}
            />
            <TextInput
              placeholder="Confirm Password"
              style={styles.InpTxt}
              value={Cnfpassword}
              onChangeText={(txt) => setCnfpassword(txt)}
            />
            <Pressable
              style={[styles.InpTxt, styles.Mtop]}
              onPress={CreatHandler}
            >
              <Text style={{ fontWeight: "bold" }}>Create Account</Text>
            </Pressable>
            <Pressable onPress={() => setNewCont(true)}>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 10,
                }}
              >
                Allready have Account ? Login
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    //alignItems: "center",
    backgroundColor: "white",
  },

  InnerCont: {
    //justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
  InpTxt: {
    backgroundColor: "white",
    width: "80%",
    padding: 10,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    elevation: 20,
  },
  Mtop: {
    marginTop: 40,
  },
});
