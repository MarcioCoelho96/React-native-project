import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import NoticiasScreen from './src/screens/NoticiasScreen'
import Noticia from './src/screens/Noticia'
import LoginScreen from './src/screens/LoginScreen'
import HorariosScreen from './src/screens/HorarioScreen';

import { NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme 
} from '@react-navigation/native';
import { 
  TouchableRipple,useTheme,Switch,
  Provider as PaperProvider,
   DefaultTheme as PaperDefaultTheme,
   DarkTheme as PaperDarkTheme
   } from 'react-native-paper'


const Stack = createStackNavigator();

export default function App() {

  const paperTheme = useTheme();


  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  function DarkMode(){
    return(
    <TouchableRipple onPress={() => {toggleTheme()}}>
      <View style={styles.preference}>
        <Text> Dark Theme </Text>
        <View pointerEvents="none">
          <Switch value={paperTheme.dark}/>

        </View>
      </View>
    </TouchableRipple>)
  }

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDarkTheme,
    colors: {
      ... NavigationDefaultTheme.colors,
      ... PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ... NavigationDarkTheme.colors,
    ... PaperDarkTheme.colors,
    background: '#333333',
    text: '#ffffff'
  }
}

const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Login',
                headerStyle: {
                  backgroundColor: '#670744',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 25,
                },
              }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            // options={{ headerTitle: props => <DarkMode {...props} /> }}
            options={{
                title: 'Home',
                headerStyle: {
                  backgroundColor: '#670744',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 25,
                },
              }}
          />
          <Stack.Screen
              name="Noticias"
              component={NoticiasScreen}
              options={{
                title: 'Noticias',
                headerStyle: {
                  backgroundColor: '#670744',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 25,
                },
              }}
            />
          <Stack.Screen
            name="Noticia"
            component={Noticia}
            options={{
              title: 'Noticias',
              headerStyle: {
                backgroundColor: '#670744',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
              },
            }}
          />
          <Stack.Screen
            name="Horarios"
            component={HorariosScreen}
          />
          {/* <Stack.Screen
            name="teste"
            component={teste}
          /> */}
        </Stack.Navigator>
        
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  }
});
