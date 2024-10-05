import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const LoginScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subTitle}>Welcome back you've been missed!</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />

      {/* Forgot Password Link */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>

      {/* Sign-In Button */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>

      {/* Create New Account Link */}
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.createAccount}>Create new account</Text>
      </TouchableOpacity>

      {/* Social Login Section */}
      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="google" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="facebook" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="apple" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0039A6',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: '#777',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#0039A6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#0039A6',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  signInButton: {
    width: '100%',
    backgroundColor: '#0039A6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: 'white',
    fontSize: 16,
  },
  createAccount: {
    color: '#777',
    marginBottom: 30,
  },
  orText: {
    color: '#777',
    marginBottom: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  iconButton: {
    marginHorizontal: 10,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 50,
  },
});

export default LoginScreen;
