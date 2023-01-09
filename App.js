// import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import Tabs from "./navigation/HomeStack";
import { store } from "./store/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Tabs />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
