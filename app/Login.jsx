import { useRouter } from 'expo-router';
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

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const router = useRouter();

  const validateUsername = (username) => {
    return username.length >= 5 && username.length <= 10;
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{5,}$/;
    return regex.test(password);
  };

  const handleLoginPress = () => {
    let valid = true;

    if (!validateUsername(username)) {
      setUsernameError('El nombre de usuario debe tener entre 5 y 10 caracteres.');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('La contraseña debe tener al menos 5 caracteres, una letra mayúscula, una letra minúscula y un símbolo.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      Alert.alert('¡Te has registrado con éxito!');
      router.replace('/(tabs)/ViewTaks'); 
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={setUsername}
        />
        {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        <Button mode="contained" style={styles.button} onPress={handleLoginPress}>
          Ingresar
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;