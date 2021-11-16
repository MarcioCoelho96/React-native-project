import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Linking, ScrollView, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import LogoIPB from '../../assets/LogoIPB.jpg'

function LoginScreen() {
    const [Username, setUsername] = useState();
    const [Password, setPassword] = useState(null);

    const navigation = useNavigation();

    const Login = async () => {
        try {
          const response = await axios.post('http://localhost:8080/api/auth/signin');
          console.log(response.data);
          if (response.status === 401){
            throw(error.message == 'Password Errada.')
          }
          if(response.status === 404){
            throw(error.message == 'Conta não encontrada.')
            navigation.navigate('Home')
          }
          if(response.status !== 200){
              throw(error.message == 'Algo errado aconteceu.')
          }else{
            navigation.navigate('Home',{token: response.accessToken, role: response.Roles})
          }
        } catch (error) {
          console.log(error.message);
          return(
            <View>
                <Text>{error.message}</Text>
            </View>
            )
        }
      };


    return (
        <SafeAreaView style={styles.loginContainer}>
            
            <Image
                style={styles.Logotipo}
                source={LogoIPB}
            />
            <View style={styles.teste}>
                <Text style={{fontSize: 55, fontWeight:'bold', color:'#333333', textAlign: 'center'}}>Bem-Vindo</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    value={Username}
                    placeholder="Número de cartão"
                    placeholderTextColor='#333333'
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={Password}
                    placeholder="Palavra-Passe"
                    placeholderTextColor='#333333'
                />

                <TouchableOpacity style={styles.loginButton} onPress={() => Login()}><Text style={{fontSize: 20, fontWeight:'bold', color:'white'}}>Login</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
      );
  }
  
  const styles = StyleSheet.create({
    Logotipo: {
        height: 700,
        width: 400,
        marginTop: 2,
        alignSelf: 'center'
    },

    teste:{
        alignItems: 'center',
        marginTop: -350
    },

    input: {
        height: 45,
        width: 250,
        margin: 12,
        borderWidth: 0,
        borderRadius: 4,
        borderColor: '#CCCCCC',
        padding: 10,
        backgroundColor: '#CCCCCC',
      },

      loginButton:{
        backgroundColor: '#670744',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 9,
        marginLeft: 0,
        height: 45,
        width: 160,
        fontSize: 10,
        borderRadius: 5,

      }
    
});

export default LoginScreen;