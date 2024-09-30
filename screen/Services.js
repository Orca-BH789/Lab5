import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';
import { useSelector } from 'react-redux';

const ServicesScreen = ({ navigation }) => {
  const services = useSelector((state) => state.service.services);

  const renderItem = ({ item }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('ServiceDetail', { service: item })}>
      <Card.Content>
        <Title>{item.name}</Title>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button mode="contained" onPress={() => navigation.navigate('AddNewService')}>
        Add New Service
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default ServicesScreen;
