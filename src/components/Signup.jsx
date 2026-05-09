import React from 'react';
import { 
  Pressable, 
  View, 
  Text, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform, 
  StyleSheet, 
  ScrollView
} from 'react-native';
import { Image } from 'expo-image';

const Signup = () => {
  return (
    <View style={styles.root}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          bounces={false}
        >
          <View style={styles.headerContainer}>
            <Image 
              source={require("@/assets/logo.svg")} 
              style={styles.logo}
            />
            <Text style={styles.title}>Sign in</Text>
            <Text style={styles.subtitle}>Let's experience the joy of telecare AI.</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputWrapper}>
              <Image 
                source={require('@/assets/mail.svg')} 
                style={styles.inputIcon} 
              />
              <TextInput 
                placeholder='elimentary221b@gmail.com' 
                style={styles.input}
                placeholderTextColor="#999"
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrapper}>
              <Image 
                source={require('@/assets/lock.svg')} 
                style={styles.inputIcon} 
              />
              <TextInput 
                placeholder='Enter your password...' 
                style={styles.input}
                secureTextEntry
                placeholderTextColor="#999"
              />
            </View>

            <Pressable style={({ pressed }) => [styles.signInButton, pressed && styles.buttonPressed]}>
              <Text style={styles.signInButtonText}>Sign In</Text>
              <Image 
                source={require('@/assets/arrow.svg')} 
                style={styles.arrowIcon}
              />
            </Pressable>

            <View style={styles.socialSection}>
              <View style={styles.socialIconsRow}>
                <Pressable style={styles.socialIconWrapper}>
                  <Image source={require('@/assets/meta.svg')} style={styles.socialIcon} />
                </Pressable>
                <Pressable style={styles.socialIconWrapper}>
                  <Image source={require('@/assets/google.svg')} style={styles.socialIcon} />
                </Pressable>
                <Pressable style={styles.socialIconWrapper}>
                  <Image source={require('@/assets/instagram.svg')} style={styles.socialIcon} />
                </Pressable>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <Pressable>
                <Text style={styles.signUpLink}>Sign Up</Text>
              </Pressable>
            </View>
            <Pressable style={styles.forgotPasswordFooter}>
              <Text style={styles.forgotLink}>Forgot your password?</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 40 : 20, // Manual safe area padding
    paddingBottom: 40,
  },
  headerContainer: {
    marginTop: 40,
    alignItems: 'center',
    marginBottom: 35,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#F0F0F0',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 54,
    marginBottom: 20,
    backgroundColor: '#FAFAFA',
  },
  inputIcon: {
    width: 22,
    height: 22,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  signInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5fdb00',
    height: 56,
    borderRadius: 16,
    marginTop: 10,
    shadowColor: '#5fdb00',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    marginRight: 8,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  socialSection: {
    alignItems: 'center',
    marginTop: 35,
  },
  socialIconsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  socialIconWrapper: {
    width: 54,
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  footer: {
    alignItems: 'center',
    marginTop: 40,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  signUpLink: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5fdb00',
  },
  forgotPasswordFooter: {
    marginTop: 5,
  },
  forgotLink: {
    fontSize: 14,
    fontWeight: '700',
    color: '#5fdb00',
  },
});

export default Signup;