import React, { useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddTodo = ({onAddItem}) => {
    const [todo, setTodo] = useState('');

    const changeHandler = (value) => {
        setTodo(value);
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='new todo..'
                onChangeText={changeHandler}
            />
            <Button onPress={() => onAddItem(todo)} title='add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb'
    }
});

export default AddTodo;
