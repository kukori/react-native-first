import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'attila', key: '1'},
    { name: 'yoshi', key: '2'},
    { name: 'mario', key: '3'},
    { name: 'luigi', key: '4'},
    { name: 'peach', key: '5'},
    { name: 'toad', key: '6'},
    { name: 'bowser', key: '7'},
  ]);
  
  const onPress = (key) => {
    console.log(key);
    setPeople((prevPeople) => {
      return prevPeople.filter((item) => item.key !== key )
    });
  }

  return (
    <View style={styles.container}>

      <FlatList 
        data={people} 
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => onPress(item.key)}>
            <Text style={styles.item}>{ item.name }</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{ item.name }</Text>
          </View>
        ))}
      </ScrollView> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
