import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
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
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos, 
          {text: text, key: Math.random().toString()}
        ]
      });
    } else {
      Alert.alert('Warning!', 'The todo must be more than 3 characters!');
    }
  }

  const onTouchablePress = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={onTouchablePress}>
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
