// ConfigurationsScreen.js
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ConfigurationsScreen = () => {
  const toggleDarkMode = () => {
    // Simulación de cambio de modo oscuro
    console.log('Cambiando a modo oscuro...');
  };

  const changeLanguage = (language) => {
    // Simulación de cambio de idioma
    console.log(`Cambiando idioma a: ${language}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuraciones de la aplicación</Text>
      {/* Opción para cambiar a modo oscuro */}
      <View style={styles.option}>
        <Ionicons name="moon-outline" size={24} color="black" /> {/* Icono para modo oscuro */}
        <Text>Cambiar a modo oscuro</Text>
        <Switch
          value={false} // Valor inicial del modo oscuro (por defecto: false)
          onValueChange={toggleDarkMode} // Función para cambiar el modo oscuro
        />
      </View>
      {/* Opción para cambiar de idioma */}
      <View style={styles.option}>
        <Ionicons name="language-outline" size={24} color="black" /> {/* Icono para cambiar de idioma */}
        <Text>Cambiar de idioma</Text>
        <Text onPress={() => changeLanguage('Español')}>Español</Text>
        <Text onPress={() => changeLanguage('Inglés')}>Inglés</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default ConfigurationsScreen;
