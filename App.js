import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SplasScreen from "./screen/SplasScreen";
import MainScreen from "./screen/MainScreen";

export default function App() {
  [splas, setSplas] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplas(false);
    }, 3000);
  });

  return <>{splas ? <SplasScreen /> : <MainScreen />}</>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
