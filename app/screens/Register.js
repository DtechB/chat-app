import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";

import Button from "../components/Button";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../../firebase";

function Register({ navigation }) {
  const [imguri, setImguri] = useState("");

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("you need to enable permissions");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions,
        quality: 0.5,
      });
      if (!result.cancelled) setImguri(result.uri);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = ({ email, password, fullName }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        updateProfile(authUser.user, {
          displayName: fullName,
          photoURL:
            imguri ||
            "https://as1.ftcdn.net/v2/jpg/01/32/20/08/1000_F_132200844_AhtrAxCNIwQV7LxCw6be9CBrnZloB5lB.jpg",
        });
      })
      .catch((error) => console.log(error.message));
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            imguri ||
            "https://www.technoknowledges.co/wp-content/uploads/2022/01/signal-app.png",
        }}
        style={{ width: 160, height: 160, borderRadius: 15, marginBottom: 20 }}
      />
      <View style={{ width: 160 }}>
        <Button
          text="choose your avatar"
          backgroundColor="#2c6bed"
          color="white"
          marginBottom={10}
          onPress={selectImage}
        />
      </View>

      <Formik
        initialValues={{ fullName: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Full name"
                autoFocus
                onChangeText={handleChange("fullName")}
              />
              {errors.fullName && (
                <Text style={{ color: "red" }}>{errors.fullName}</Text>
              )}
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange("email")}
              />
              {errors.email && (
                <Text style={{ color: "red" }}>{errors.email}</Text>
              )}
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={handleChange("password")}
                secureTextEntry
              />
              {errors.password && (
                <Text style={{ color: "red", marginBottom: 10 }}>
                  {errors.password}
                </Text>
              )}
              <Button
                text="Register"
                color="white"
                backgroundColor="#2c6bed"
                marginBottom={10}
                onPress={handleSubmit}
              />
              <Button
                text="Login"
                color="#2c6bed"
                onPress={() => navigation.navigate("Login")}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  inputContainer: {
    width: "70%",
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
  },
});

export default Register;
