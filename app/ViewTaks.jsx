import React from 'react';
import { View, Text } from 'react-native';
import { Button, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8e44ad',
    accent: '#f1c40f',
  },
};

export default function ViewTaks() {
  const navigation = useRouter();

  const handleGetStarted = () => {
    navigation.push('/AddTaks'); 
  };

  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' }}>
        <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 10 }}>Bienvenido</Text>
          <Text style={{ fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 20 }}>
            ¡Ya puede comenzar a agregar sus tareas!
          </Text>
          <Button mode="contained" onPress={handleGetStarted} style={{ backgroundColor: theme.colors.primary, paddingVertical: 10, paddingHorizontal: 20, margin: 3 }}>
            Continuar
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
}
