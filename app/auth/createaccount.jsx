import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function CreateAccount() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Main content area */}
      <View style={{ flex: 1 }}>
        {/* Top row */}
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.circleButton} onPress={() => router.back()}>
            <Text style={styles.circleButtonText}>{'<'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Icon */}
        <View style={styles.iconBox}>
          <Text style={{ fontSize: 40 }}>🔒✨</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Enter your phone{'\n'}number</Text>
        <Text style={styles.subtitle}>We will send an OTP verification to you.</Text>

        {/* Phone input */}
        <View style={styles.inputBox}>
  <Text style={styles.countryCode}>+91</Text>
  <Text style={styles.separator}>|</Text>
  <TextInput
    style={styles.phoneInput}
    placeholder="Phone Number"
    keyboardType="phone-pad"
    placeholderTextColor="#848484"
    maxLength={10}
    
  />
</View>

      </View>

      {/* Confirm button pinned at bottom */}
      <TouchableOpacity 
        style={styles.confirmButton}
        onPress={() => router.push('/auth/confirm')}
      >
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    paddingTop: 60,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
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
  iconBox: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
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
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#F9FBFD',
    marginBottom: 40,
    height: 50,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 8,
    color: '#333',
  },
  phoneInput: {
    fontSize: 16,
    flex: 1,
    color: '#000',
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
    marginTop: 16,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
