import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { TextInput as PaperTextInput, Text } from 'react-native-paper';

const AddTaks = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text>Crear Tarea</Text>
        </View>  
        <PaperTextInput
            label="Título"
            style={styles.input}
        />
        <PaperTextInput
            label="Descripción"
            multiline={true}
            numberOfLines={4}
            style={[styles.input, styles.textarea]}
        />
        <PaperTextInput
            label="Autor"
            style={styles.input}
        />
        <PaperTextInput
            label="Fecha"
            style={styles.input}
            keyboardType="numeric"
        />
        <Button title="Agregar Tarea" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: "center",
  },
  input: {
    marginBottom: 10,
  },
  textarea: {
    height: 100,
  },
});

export default AddTaks;