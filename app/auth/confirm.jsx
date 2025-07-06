import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ConfirmNumber() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    if (index === 3 && value !== '') {

      console.log('OTP:', newOtp.join(''));
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleConfirm = () => {
    const otpValue = otp.join('');
    console.log('OTP submitted:', otpValue);
    router.push('/auth/newpass');  
  };

  return (
    <View style={styles.container}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.circleButton} onPress={() => router.back()}>
          <Text style={styles.circleButtonText}>{'<'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/auth/login')}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      {/* Icon */}
      <View style={styles.iconBox}>
        <Text style={{ fontSize: 40 }}>🔒✨</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Confirm your{'\n'}number</Text>
      <Text style={styles.subtitle}>Enter the code we sent to the number ending with 0957</Text>

      {/* OTP Inputs */}
      <View style={styles.otpRow}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            style={[
              styles.otpInput,
              index === 0 && { borderColor: '#0085FF', borderWidth: 1 },
            ]}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleChange(index, value)}
            onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
          />
        ))}
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
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
  loginButton: {
    borderWidth: 1,
    borderColor: '#0085FF',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  loginButtonText: {
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
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  otpInput: {
    backgroundColor: '#F9FBFD',
    borderRadius: 30,
    width: 60,
    height: 60,
    textAlign: 'center',
    fontSize: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
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
    marginTop: 200,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
   

  },
});
