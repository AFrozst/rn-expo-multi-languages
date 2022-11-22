import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Switch } from "react-native-paper";

const Preferences = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handlePress = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Preferences</Text>
      <Text style={styles.text}>Enable/Disable Dark Mode</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View style={styles.containerLenguages}>
        <Text style={styles.textLenguages}>Lenguages</Text>
        <Text style={styles.optionLanguage}>Spanish</Text>
        <Text style={styles.optionLanguage}>English</Text>
        <Text style={styles.optionLanguage}>French</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Preferences;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
  },
  containerLenguages: {
    backgroundColor: "gray",
    borderRadius: 2,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  textLenguages: {
    fontSize: 20,
    color: "white",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
  optionLanguage: {
    fontSize: 15,
    color: "black",
    marginVertical: 15,
    marginHorizontal: 10,
  },
});
