import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import LogoExtensoIPB from '../../assets/LogoExtensoIPB.png'

export default function HomeScreen({route}) {
    var role = route.params.Roles
    const navigation = useNavigation();

    function WebmailRedirect(){
      if(role == "ROLE_ALUNO"){
        Linking.openURL('https://webmail.alunos.ipb.pt/')
      }else{
        Linking.openURL('https://webmail.ipb.pt/login.php')
      }
    }

    return (
      <View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.Logotipo}
            source={LogoExtensoIPB}
          />
        </View>

        <View style={styles.buttongrid}>

          <View style={styles.column}>
            <TouchableOpacity style={styles.NoticiasScreen} onPress={() =>navigation.navigate('Noticias')}><Text style={styles.NoticiasText}>Noticias</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.CalendarioAnualScreen} onPress={() => Linking.openURL('http://apps2.ipb.pt/webdocs/portal/download?docId=669')}><Text style={styles.CalendarioAnualText}>Calendario Anual</Text></TouchableOpacity>
            <TouchableOpacity style={styles.LocalizadorScreen}><Text style={styles.LocalizadorText}>Localizador</Text></TouchableOpacity>
          </View>

          <View style={styles.column2}>
            <TouchableOpacity style={styles.HorarioPessoalScreen} onPress={() => navigation.navigate('Horarios')}><Text style={styles.HorarioPessoalText}>Horario pessoal</Text></TouchableOpacity>
            <TouchableOpacity style={styles.WebmailRedirect} onPress={() => WebmailRedirect(Role)}><Text style={styles.WebmailRedirectText}>Webmail</Text></TouchableOpacity>
            <TouchableOpacity style={styles.IPBVirtualRedirect} onPress={() => Linking.openURL('https://virtual.ipb.pt/portal')}><Text style={styles.IpbVirtualRedirectText}>Ipb virtual</Text></TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.IpbSARedirect} onPress={() => Linking.openURL('https://apps2.ipb.pt/online/ui')}><Text style={styles.IpbSARedirectText}>Ipb SA</Text></TouchableOpacity>

      </View>
    );
}

const styles = StyleSheet.create({
  Logotipo: {
    width: 320,
    height: 140,
    marginTop: 10
  },

  buttongrid: {
    marginTop: -40,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },

  column: {
    marginRight: -75,
  },

  NoticiasScreen: {
    backgroundColor: '#670744',
    justifyContent: 'center',
    borderColor: '#58285C',
    borderWidth: 1,
    borderRadius: 18,
    width: 140,
    height: 160, 
  },

  NoticiasText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 118,
    marginLeft: 14
  },

  CalendarioAnualScreen: {
    backgroundColor: '#670744',
    justifyContent: 'center',
    borderColor: '#58285C',
    borderWidth: 1,
    borderRadius: 18,
    width: 140,
    height: 100,
    marginTop: 10
  },

  CalendarioAnualText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 35,
    marginLeft: 14
  },

  LocalizadorScreen: {
    backgroundColor: '#670744',
    justifyContent: 'center',
    borderColor: '#58285C',
    borderWidth: 1,
    borderRadius: 18,
    width: 140,
    height: 165,
    marginTop: 12
  },

  LocalizadorText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 115,
    marginLeft: 14
  },

  HorarioPessoalScreen: {
    backgroundColor: '#670744',
    justifyContent: 'center',
    borderColor: '#58285C',
    borderWidth: 1,
    borderRadius: 18,
    width: 140,
    height: 180,
  },

  HorarioPessoalText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 115,
    marginLeft: 14
  },

  WebmailRedirect: {
    backgroundColor: '#670744',
    justifyContent: 'center',
    borderColor: '#58285C',
    borderWidth: 1,
    borderRadius: 18,
    width: 140,
    height: 180,
    marginTop: 10
  },

  WebmailRedirectText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 115,
    marginLeft: 14
  },

  IPBVirtualRedirect: {
    backgroundColor: '#670744',
    justifyContent: 'center',
    borderColor: '#58285C',
    borderWidth: 1,
    borderRadius: 18,
    width: 140,
    height: 180,
    marginTop: 10
  },

  IpbVirtualRedirectText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 130,
    marginLeft: 14
  },

  IpbSARedirect: {
    backgroundColor: '#670744',
    justifyContent: 'center',
    borderColor: '#58285C',
    borderWidth: 1,
    borderRadius: 18,
    position: 'absolute',
    width: 140,
    height: 100,
    marginTop: 570,
    marginLeft: 47
  },

  IpbSARedirectText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 60,
    marginLeft: 14
  },  
});
