import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1'},
    { text: 'create a react native app', key: '2'},
    { text: 'be a millionaire', key: '3'},
  ]);

  const onItemPress = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.key !== key )
    });
  }

  const onAddItem = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos, 
        {text: text, key: Math.random().toString()}
      ]
    });
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo onAddItem={onAddItem} />
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} onItemPress={onItemPress} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
});
