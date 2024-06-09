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
        name="AddTaks"
        options={{
          title: 'Crear tarea',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus" color={color} size={26} />
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
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tabs>
  );
}
