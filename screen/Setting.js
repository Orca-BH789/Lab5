import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import auth from '@react-native-firebase/auth';

export const SettingScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    auth().signOut().catch(error => console.log('Error logging out: ', error));
    
  };

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={handleLogout} style={styles.button}>
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  button: {
    marginBottom: 16,
  },
});