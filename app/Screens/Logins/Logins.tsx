// // components/Login.tsx
// import { StyleSheet } from 'react-native';

// import FingerprintAuth from '@/components/FingerprintAuth/FingerprintAuth';
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { useDispatch } from 'react-redux';
// // import { login } from '@/redux/Auth/Auth';

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     // Aquí iría la lógica para autenticar el usuario, por ejemplo, una llamada a una API
//     const user = { username }; // Simula el usuario autenticado
//     // dispatch(login(user));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <View style={styles.container}>
//         <TextInput
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         <Button title="Login" onPress={handleLogin} />
//         <FingerprintAuth />
//       </View>

//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });




// // components/Login.tsx
// import { StyleSheet } from 'react-native';

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { useDispatch } from 'react-redux';
// import FingerprintAuth from '@/components/FingerprintAuth/FingerprintAuth';
// // import { login } from '@/redux/Auth/Auth';

// export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     // Aquí iría la lógica para autenticar el usuario, por ejemplo, una llamada a una API
//     const user = { username }; // Simula el usuario autenticado
//     // dispatch(login(user));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>




//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//           placeholderTextColor="#888"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           placeholderTextColor="#888"
//         />
//         <Button title="Login" onPress={handleLogin} color="#007aff" />
//       </View>
//       <View style={styles.FingerprintAuth}
//       >
//         <FingerprintAuth />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     backgroundColor: '#f0f0f5',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 0,
//   },
//   inputContainer: {
//     width: '80%',
//     paddingTop:100,
//     alignItems: 'center',
//     marginBottom: -450,

//   },
//   input: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     fontSize: 16,
//     marginBottom: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     backgroundColor: '#007aff',
//     color: '#fff',

//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
//   FingerprintAuth: {
//     display: 'flex',           // En React Native, el display flex es por defecto
//     flexWrap: 'wrap',        // wrap por defecto es nowrap
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     alignContent: 'flex-end',
//     flexDirection: 'column',
//     paddingTop:400,

//   }
// });


// components/Login.tsx
import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import FingerprintAuth from '@/components/FingerprintAuth/FingerprintAuth';
import Feather from '@expo/vector-icons/Feather';

// import { login } from '@/redux/Auth/Auth';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Aquí iría la lógica para autenticar el usuario, por ejemplo, una llamada a una API
    const user = { username }; // Simula el usuario autenticado
    // dispatch(login(user));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Feather name="user" size={200} color="grey" style={styles.icon} />
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#888"
          />
        </View>
        
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#888"
          />
        </View>
        {/* <Button title="Login" onPress={handleLogin} color="#007aff" /> */}


        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Get In</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.button2}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText2}>Register</Text>
        </TouchableOpacity> */}

      </View>


      <View style={styles.FingerprintAuth}>
        <FingerprintAuth />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f5',
    overflow: 'hidden',
    borderBlockColor: 'brack',
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 40,
    // fontWeight: '600',
    color: 'grey',
    marginTop: 20,
  },
  inputContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '80%',
    paddingTop: 0,
    alignItems: 'center',
    marginBottom: -550,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  icon: {
    // position: 'absolute',
    // left: 10,
    paddingBottom: 10,

  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 20, // Se incrementó para dejar espacio al icono
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: '#007aff', // Cambia el color del fondo
    padding: 10, // Espaciado interno
    borderRadius: 8, // Bordes redondeados
    alignItems: 'center', // Centra el contenido
    justifyContent: 'center', // Centra el contenido
  },
  button2: {
    backgroundColor: '#a0a0a01e', // Cambia el color del fondo
    padding: 10, // Espaciado interno
    borderRadius: 8, // Bordes redondeados
    alignItems: 'center', // Centra el contenido
    justifyContent: 'center', // Centra el contenido
  },
  buttonText: {
    color: '#fff', // Color del texto
    fontSize: 16, // Tamaño del texto
  },
  buttonText2: {
    color: '#000000', // Color del texto
    fontSize: 16, // Tamaño del texto
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  FingerprintAuth: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'flex-end',
    flexDirection: 'column',
    paddingTop: 700,
  },
});
