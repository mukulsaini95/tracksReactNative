import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from "./src/components/App"
import { NavigationContainer } from '@react-navigation/native';
import { Provider as AuthProvider } from "./src/context/AuthContext"

export default function() {
 
  return (
    <AuthProvider>
      <NavigationContainer>
        <App/>
      </NavigationContainer>
    </AuthProvider>
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
