import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import { auth, signOut } from "../../firebase";
import AppListItem from "../components/AppListItem";

function Home({ navigation }) {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => console.log(error));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTitleAlign: "center",
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity onPress={handleSignOut}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView>
        <AppListItem />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Home;
