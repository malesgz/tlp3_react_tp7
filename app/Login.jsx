import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, Button, TextInput, Text, DefaultTheme } from 'react-native-paper';
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
      router.replace('/ViewTaks');
    }
  };

  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: '#fff' }}>
        <Text style={{ fontSize: 24, marginBottom: 20, fontWeight: 'bold' }}>Iniciar sesión</Text>
        <TextInput
          label="Nombre de usuario"
          value={username}
          onChangeText={setUsername}
          style={{ width: '80%', marginBottom: 20 }}
          error={!!usernameError}
        />
        {usernameError ? <Text style={{ color: 'red', alignSelf: 'flex-start', width: '80%', marginBottom: 10 }}>{usernameError}</Text> : null}
        <TextInput
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ width: '80%', marginBottom: 20 }}
          error={!!passwordError}
        />
        {passwordError ? <Text style={{ color: 'red', alignSelf: 'flex-start', width: '80%', marginBottom: 10 }}>{passwordError}</Text> : null}
        <Button mode="contained" style={{ marginVertical: 10, width: '80%' }} onPress={handleLoginPress}>
          Ingresar
        </Button>
      </View>
    </PaperProvider>
  );
};

export default Login;