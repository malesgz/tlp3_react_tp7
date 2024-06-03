import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const WelcomeView = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>¡Bienvenido!</Text>
      <Text style={{ marginBottom: 20 }}>¡Gracias por usar nuestra aplicación!</Text>
      <Button mode="contained" onPress={() => console.log('Botón presionado')}>
        Comenzar
      </Button>
    </View>
  );
}

export default WelcomeView;