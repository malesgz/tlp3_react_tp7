import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8e44ad',
    accent: '#f1c40f',
    surface: '#ffffff',
    title: '#1abc9c',
    description: '#e74c3c',
  },
};

const ListTaks = () => {
  const [tasks] = useState([
    {
        "title": "Hacer trabajo final de Mineria de Datos.",
        "description": "Realizar todas las consignas del trabajo para presentar y poder hacer la exposición.",
        "author": "Malena Analuz Gonzalez",
        "date": "2024-06-01"
      },
      {
        "title": "Estudiar para segundo parcial de estadistica.",
        "description": "Repasar todos los temas que entran en el segundo parcial de estadistica.",
        "author": "Malena Analuz Gonzalez",
        "date": "2024-06-02"
      },
      {
        "title": "Mirar la nueva serie de Netflix.",
        "description": "El viernes 7 se estrena Jerarquía la nueva serie coreana de netflix.",
        "author": "Malena Analuz Gonzalez",
        "date": "2024-06-03"
      },
      {
        "title": "Lavar la ropa.",
        "description": "Lavar toda la ropa que usaste los días de clase.",
        "author": "Malena Analuz Gonzalez",
        "date": "2024-06-04"
      },
      {
        "title": "Comprar regalo para el abuelo.",
        "description": "Le gustan las alpargatas, los sombreros, las guampas para el tereré o la hebilla para la pañoleta nueva.",
        "author": "Malena Analuz Gonzalez",
        "date": "2024-06-05"
      }
  ]);

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.title}>{item.title}</Title>
        <Paragraph style={styles.description}>{item.description}</Paragraph>
        <Paragraph>Autor: {item.author}</Paragraph>
        <Paragraph>Fecha: {item.date}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Title style={styles.listTitle}>Lista de Tareas</Title> {/* Modificado aquí */}
        <View style={styles.cardsContainer}>
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </PaperProvider>
  );
};

export default ListTaks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  cardsContainer: {
    flex: 1,
  },
  card: {
    marginVertical: 8,
    backgroundColor: theme.colors.surface,
  },
  title: {
    color: theme.colors.title,
    marginBottom: 5,
  },
  description: {
    color: theme.colors.description,
  },
  listTitle: {
    color: theme.colors.primary,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
