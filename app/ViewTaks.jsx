import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Stack, useRouter } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function ViewTaks() {
  const navigation = useRouter();

  const handleGetStarted = () => {
    navigation.push('/AddTaks'); 
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false}} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.subtitle}>¡Ya puede comenzar a agregar sus tareas!</Text>
          <Button mode="contained" onPress={handleGetStarted} style={styles.button}>
            Continuar
          </Button>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  contentContainer: {
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: verticalScale(10),
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: '#666',
    textAlign: 'center',
    marginBottom: verticalScale(20),
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(20),
    margin: 3
  },
});