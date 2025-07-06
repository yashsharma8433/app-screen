import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ChooseNewPassword() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleConfirm = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Proceed to next screen
    router.push('/auth/success');
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
        <Text style={{ fontSize: 40 }}>⚙️✅</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Choose new{'\n'}password</Text>
      <Text style={styles.subtitle}>Choose a new password to login</Text>

      {/* New Password */}
      <View style={styles.inputBox}>
        <TextInput
          placeholder="New Password"
          placeholderTextColor="#999"
          secureTextEntry={!showNewPassword}
          style={styles.input}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
          <Text style={styles.eyeIcon}>{showNewPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry={!showConfirmPassword}
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Text style={styles.eyeIcon}>{showConfirmPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
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
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FBFD',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  eyeIcon: {
    fontSize: 18,
    marginLeft: 8,
  },
  confirmButton: {
    backgroundColor: '#0085FF',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
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
