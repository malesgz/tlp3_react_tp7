import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>¡Bienvenido!</Text>
      <Text style={{ marginBottom: 20 }}>¿Es la primera vez usando la aplicación? ¡Crea una cuenta!</Text>
      <Button mode="contained" onPress={handleRegisterPress}>Registrarme</Button>
      <Button mode="contained" style={{ marginTop: 20 }} onPress={handleLoginPress}>Iniciar Sesión</Button>
    </View>
  );
}

export default Welcome;