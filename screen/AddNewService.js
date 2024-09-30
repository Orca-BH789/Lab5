import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addService } from '../store/slices/serviceSlice';

const AddNewService = ({ navigation })  => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useDispatch();

  const handleAddService = () => {
    const newService = {
      id: Date.now().toString(),
      name,
      description,
      price: parseFloat(price),
    };
    dispatch(addService(newService));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Add New Service</Title>
      <TextInput
        label="Service Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        style={styles.input}
      />
      <TextInput
        label="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddService} style={styles.button}>
        Add Service
      </Button>
    </View>
  );
}
export default AddNewService;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 24,
  },
});