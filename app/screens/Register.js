import React from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../../firebase";

function Register({ navigation }) {
  const handleSubmit = ({ email, password, fullName }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        updateProfile(authUser.user, {
          displayName: fullName,
          photoURL:
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
          uri: "https://www.technoknowledges.co/wp-content/uploads/2022/01/signal-app.png",
        }}
        style={{ width: 160, height: 160, borderRadius: 15, marginBottom: 20 }}
      />
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
