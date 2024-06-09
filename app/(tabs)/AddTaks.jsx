import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { TextInput, Text, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#a15eb5',
    accent: '#f1c40f',
  },
};

const AddTaks = () => {
  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1, padding: 20, backgroundColor: '#fff', justifyContent: "center" }}>
        <View>
          <Text style={{ fontSize: 24, marginBottom: 10 }}>Crear Tarea</Text>
        </View>  
        <TextInput
          label="Título"
          style={{ marginBottom: 10 }}
        />
        <TextInput
          label="Descripción"
          multiline={true}
          numberOfLines={4}
          style={{ marginBottom: 10, height: 100 }}
        />
        <TextInput
          label="Autor"
          style={{ marginBottom: 10 }}
        />
        <TextInput
          label="Fecha"
          style={{ marginBottom: 10 }}
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <Button title="Agregar Tarea" onPress={() => {}} color={theme.colors.primary} />
          <Button title="Editar Tarea" onPress={() => {}} color={theme.colors.primary} />
          <Button title="Eliminar Tarea" onPress={() => {}} color={theme.colors.primary} />
        </View>
      </View>
    </PaperProvider>
  );
};

export default AddTaks;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
