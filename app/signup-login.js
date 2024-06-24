// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
// import supabase from './supabase'; // Update the path to your supabase.js file

// const SignupLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = async () => {
//     try {
//       const { user, error } = await supabase.auth.signUp({ email, password });
//       if (error) {
//         Alert.alert('Signup Error', error.message);
//       } else {
//         Alert.alert('Signup Successful', 'Please check your email for verification.');
//       }
//     } catch (error) {
//       console.log('Error signing up:', error.message);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const { user, error } = await supabase.auth.signIn({ email, password });
//       if (error) {
//         Alert.alert('Login Error', error.message);
//       } else {
//         Alert.alert('Login Successful', `Welcome ${user.email}!`);
//       }
//     } catch (error) {
//       console.log('Error logging in:', error.message);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
//       />
//       <TouchableOpacity onPress={handleSignup} style={{ marginBottom: 10 }}>
//         <Text style={{ color: 'blue' }}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleLogin}>
//         <Text style={{ color: 'blue' }}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SignupLogin;
