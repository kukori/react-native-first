import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({item, onItemPress}) => {
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="indianred" onPress={() => onItemPress(item.key)}/>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10
    },
    itemText: {
        marginLeft: 10
    }
});

export default TodoItem;