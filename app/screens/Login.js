import React from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../components/Button";

function Login(props) {
  const handleSubmit = ({ email, password }) => {};

  const validationSchema = Yup.object().shape({
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
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                autoFocus
                onChangeText={handleChange("email")}
              />
              {errors && <Text style={{ color: "red" }}>{errors.email}</Text>}
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={handleChange("password")}
                secureTextEntry
              />
              {errors && (
                <Text style={{ color: "red", marginBottom: 10 }}>
                  {errors.password}
                </Text>
              )}
              <Button
                text="Login"
                color="white"
                backgroundColor="#2c6bed"
                marginBottom={10}
                onPress={handleSubmit}
              />
              <Button text="Register" color="#2c6bed" />
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

export default Login;
