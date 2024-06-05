import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { Provider as PaperProvider, Button, DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{5,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = () => {
    if (username && (username.length < 5 || username.length > 10)) {
      Alert.alert('Error', 'El nombre de usuario debe tener entre 5 y 10 caracteres.');
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe tener al menos 5 caracteres, incluir una letra mayúscula, una letra minúscula y un símbolo.');
      return;
    }
    Alert.alert('¡Te has registrado con éxito!');
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button mode="contained" style={styles.button} onPress={handleRegister}>
          Registrarme
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    marginVertical: 10,
    width: '80%',
  },
});

export default Register;