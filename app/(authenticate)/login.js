import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';


const login = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View>
        <Image style={{ width: 150, height: 100, resizeMode: "contain" }}
          source={{ uri: "https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-16.png" }} />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: "041E42" }}>Log in to your account</Text>
        </View>
        <View>
          <MaterialIcons name="email" size={24} color="black" />
          <TextInput placeholder='Please enter your email' />

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({})