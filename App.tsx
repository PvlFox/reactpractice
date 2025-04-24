import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View } from 'react-native';

// Для использования TypeScript ты можешь указать типы props (если они есть)
const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Изображение профиля */}
      <Image
        source={{ uri: 'https://i.imgur.com/1PYVIrh.jpeg' }}
        style={styles.profileImage}
      />

      {/* Имя и фамилия */}
      <Text style={styles.name}>Максим Михайлов</Text>

      {/* Название группы */}
      <Text style={styles.group}>Группа: CS-206(c)</Text>

      {/* Электронная почта */}
      <Text style={styles.email}>maxmih462@gmail.com</Text>

      {/* Дополнительная информация */}
      <Text style={styles.info}>Хобби: музыка, музыка, музыка</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  group: {
    fontSize: 18,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default App;