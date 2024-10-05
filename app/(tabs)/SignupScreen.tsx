import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For Google, GitHub, and Apple icons
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Create an account so you can explore all the existing jobs</Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>

        {/* "Already have an account" button */}
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.haveAccount}>Already have an account?</Text>
        </TouchableOpacity>

        <Text style={styles.orContinueWith}>Or continue with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="google" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="github" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="apple" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  signupButton: {
    backgroundColor: '#3b82f6',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  signupText: {
    color: 'white',
    fontWeight: 'bold',
  },
  haveAccount: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  orContinueWith: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  iconButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 50,
  },
});

export default RegisterScreen;
