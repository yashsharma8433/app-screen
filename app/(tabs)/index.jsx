import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

const logoimg = require("../../assets/images/image.png"); 

export default function App() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <View style={styles.logoBox}>
        <Image source={logoimg} style={styles.logo} contentFit="contain" />
      </View>

      <Text style={styles.title}>Welcome to spehre!</Text>
      <Text style={styles.subtitle}>
        Find peers, internships, and job opportunities{'\n'}
        within your college community.
      </Text>

      <TouchableOpacity style={styles.createButton} onPress={() => router.push('/auth/createaccount')}>
        <Text style={styles.createButtonText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/auth/login')}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        By continuing, you agree to Spehre.io’s <Text style={styles.link}>Terms of Service</Text>{'\n'}
        and <Text style={styles.link}>Privacy Policy</Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0085FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 24,
  },
  logo: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 32,
  },
  createButton: {
    backgroundColor: '#0085FF',
    paddingVertical: 16,
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 12,
    // Black shadow effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android shadow
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orText: {
    color: '#fff',
    marginBottom: 12,
  },
  loginButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
  },
  link: {
    textDecorationLine: 'underline',
  },
});
