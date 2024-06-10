import React from 'react';
import { View, Text } from 'react-native';
import { Button, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8e44ad',
    accent: '#f1c40f',
  },
};

const Welcome = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, marginBottom: 20, fontWeight: 'bold' }}>¡Bienvenido!</Text>
        <Text style={{ marginBottom: 20 }}>¿Es la primera vez usando la aplicación? ¡Crea una cuenta!</Text>
        <Button mode="contained" onPress={handleLoginPress} style={{ marginBottom: 10, width: '80%' }}>
          Iniciar Sesión
        </Button>
        <Button mode="contained" onPress={handleRegisterPress} style={{ width: '80%' }}>
          Registrarme
        </Button>
      </View>
    </PaperProvider>
  );
};

export default Welcome;