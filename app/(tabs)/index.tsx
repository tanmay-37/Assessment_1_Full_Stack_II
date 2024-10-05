import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const HomeScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: '../../assets/images/Work.png' }} // Replace with actual image link or local image
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Title Section */}
      <Text style={styles.title}>Discover Your Dream Job here</Text>
      <Text style={styles.subTitle}>
        Explore all the exciting job roles based on your interest and study major
      </Text>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('LoginScreen')} // Navigate to LoginScreen
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('SignupScreen')} // Navigate to RegisterScreen
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#FF5EDF', // Adjust the color based on your image border
    padding: 5,
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0039A6',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#0039A6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  registerButton: {
    flex: 1,
    backgroundColor: '#0039A6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;
