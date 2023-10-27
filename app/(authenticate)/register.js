import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Entypo } from '@expo/vector-icons';

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ width: 150, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-16.png",
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Register to your account
          </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <Ionicons name="person" style={{ marginLeft: 8 }}
              size={24} color="black" />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "grey",
                marginVertical: 10,
                width: 300,
                fontSize: name ? 18 : 18,
              }}
              placeholder="enter your Name"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              name="email"
              style={{ marginLeft: 8 }}
              size={24}
              color="black"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "grey",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 18 : 18,
              }}
              placeholder="enter your email"
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 12,
            }}
          >
            <EvilIcons
              name="lock"
              style={{ marginLeft: 8 }}
              size={24}
              color="black"
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                color: "grey",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 18 : 18,
              }}
              placeholder="enter your password"
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#E0E0E0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 12,
            }}
          >
            <Entypo name="image" style={{ marginLeft: 8 }}
              size={24} color="black" />
            <TextInput
              value={image}
              onChangeText={(text) => setImage(text)}
              secureTextEntry={true}
              style={{
                color: "grey",
                marginVertical: 10,
                width: 300,
                fontSize: image ? 18 : 18,
              }}
              placeholder="enter your Image url"
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Keep me logged In</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forgot Password
          </Text>
        </View>
        <View ></View>
        <Pressable
          style={{
            width: 200,
            backgroundColor: "#0072b1",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
            marginTop: 12
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </Pressable>
        <Pressable
          style={{ marginTop: 15 }}
          onPress={() => router.replace("/login")}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
            Already have an accoun ? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({});
