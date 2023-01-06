import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Home } from './screens/homeScreen'

export default function App() {
  return (
    <SafeAreaView>
      <Home></Home>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
