import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { deleteService } from '../store/slices/serviceSlice';

const ServiceDetail = ({ route, navigation }) => {
  const { serviceId } = route.params;
  const dispatch = useDispatch();
  
  const service = useSelector((state) => 
    state.service.services.find((s) => s.id === serviceId)
  );

  const handleDelete = () => {
    dispatch(deleteService(serviceId));
    navigation.goBack();
  };

  if (!service) {
    return <View><Title>Service not found</Title></View>;
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>{service.name}</Title>
          <Paragraph>{service.description}</Paragraph>
          <Paragraph>Price: ${service.price.toFixed(2)}</Paragraph>
        </Card.Content>
      </Card>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={() => navigation.navigate('EditService', { serviceId })}>
          Edit
        </Button>
        <Button mode="outlined" onPress={handleDelete} style={styles.deleteButton}>
          Delete
        </Button>
      </View>
    </View>
  );
};
export default ServiceDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  deleteButton: {
    borderColor: 'red',
    color: 'red',
  },
});