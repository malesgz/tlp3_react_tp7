import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Switch, TextInput, Button, Text, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#a15eb5',
    accent: '#f1c40f',
  },
};

const ConfigurationsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('Español');
  const [notifications, setNotifications] = useState(true);
  const [fontSize, setFontSize] = useState(16);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const changeFontSize = (size) => {
    setFontSize(size);
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={styles.title}>Configuraciones de la aplicación</Text>
        <View style={styles.option}>
          <Text>Cambiar a modo oscuro</Text>
          <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </View>
        <View style={styles.option}>
          <Text>Cambiar de idioma</Text>
          <TextInput
            label="Idioma"
            value={language}
            onChangeText={changeLanguage}
            mode="outlined"
            style={styles.input}
          />
        </View>
        <View style={styles.option}>
          <Text>Activar notificaciones</Text>
          <Switch value={notifications} onValueChange={toggleNotifications} />
        </View>
        <View style={styles.option}>
          <Text>Tamaño de fuente</Text>
          <TextInput
            label="Tamaño"
            value={fontSize.toString()}
            onChangeText={changeFontSize}
            keyboardType="numeric"
            mode="outlined"
            style={[styles.input, { width: 80 }]}
          />
        </View>
        <Button mode="contained" onPress={() => console.log('Guardar configuraciones')}>
          Guardar configuraciones
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});

export default ConfigurationsScreen;