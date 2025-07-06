import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.circleButton}>
          <Text style={styles.circleButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={() => router.push('/auth/createaccount')}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Login to your{'\n'}
        <Text style={{ color: '#000' }}>account</Text> 🔐
      </Text>

      <Text style={styles.subtitle}>Enter your credentials to sign in.</Text>

      {/* Email input */}
      <View style={styles.inputBox}>
        <Text style={styles.inputIcon}>📧</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>

      {/* Password input */}
      <View style={styles.inputBoxLight}>
        <Text style={styles.inputIcon}>🔒</Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />
        <Text style={styles.eyeIcon}>👁️</Text>
      </View>

      <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Social login */}
      <Text style={styles.orText}>Or login using</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Image 
            source={require('../../assets/images/google.png')}
            style={styles.gicon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={{ fontSize: 28 }}></Text>
        </TouchableOpacity>
      </View>

      {/* Bottom sign up */}
      <Text style={styles.bottomText}>
        Don’t have an account <Text style={styles.signUpLink}>sign up?</Text>
      </Text>

      {/* Confirm button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFD',
    padding: 20,
    paddingTop: 60,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  circleButton: {
    borderWidth: 1,
    borderColor: '#0085FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  circleButtonText: {
    color: '#0085FF',
    fontSize: 18,
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: '#0085FF',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  signUpButtonText: {
    color: '#0085FF',
    fontWeight: '500',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    color: '#777',
    marginBottom: 24,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#0085FF',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 12,
    height: 50,
  },
  inputBoxLight: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 4,
    height: 50,
    backgroundColor: '#fff',
  },
  inputIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  eyeIcon: {
    fontSize: 16,
  },
  forgot: {
    fontSize: 12,
    color: '#0085FF',
  },
  orText: {
    textAlign: 'center',
    color: '#999',
    marginVertical: 16,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  socialButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: 10, 
  },
  gicon: {
    height: 26,
    width: 26,
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
    marginBottom: 20,
  },
  signUpLink: {
    color: '#0085FF',
    textDecorationLine: 'underline',
  },
  confirmButton: {
    backgroundColor: '#0085FF',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    marginTop: 80,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
