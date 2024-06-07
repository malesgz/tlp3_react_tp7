import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="AddTask"
        options={{
          title: 'Crear una tarea',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="list-status" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="ListTaks"
        options={{
          title: 'Lista de tareas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="list-status" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Configuración',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="list-status" color={color} size={26} />
          ),
        }}
      />
    </Tabs>
  );
}
