import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Linking } from 'react-native';
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


export default function DarkMode() {

    
  const paperTheme = useTheme();


  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

 

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

  return(
        <View>
            <TouchableRipple onPress={() => {toggleTheme()}}>
                <View style={styles.preference}>
                    <Text> Dark Theme </Text>
                    <View pointerEvents="none">
                        <Switch value={paperTheme.dark}/>

                    </View>
                </View>
            </TouchableRipple>
        </View>
  )
}

const styles = StyleSheet.create({
 
  
});