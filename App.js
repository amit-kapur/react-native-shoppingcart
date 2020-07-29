import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/header';
import ListItem from './components/listItems';
// import {uuid} from 'uuidv4';
import AddItem from './components/addItem';

const App = () => {
  const [items, setItems] = useState([
    {id: '-1', text: 'Milk'},
    {id: '-2', text: 'Egg'},
    {id: '-3', text: 'Juice'},
    {id: '-4', text: 'Bread'},
  ]);

  const deleteItem = (id) => {
    setItems((previousItems) => {
      return previousItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter text...', {text: 'OK'});
    } else {
      setItems((previousItems) => {
        return [
          {id: (previousItems.length + 1).toString(), text},
          ...previousItems,
        ];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List App',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
