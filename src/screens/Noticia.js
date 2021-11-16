import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Linking, ScrollView, ImageBackground } from 'react-native';

import padraoFundo from '../../assets/padrao-fundo.png'

export default function Noticia({ route }) {
    var id  = route.params.id;
    var noticia = route.params

    //Em vez de passares os parametros todos pelo front end podes passar só o item e fazer um request ao backend para ir buscar a noticia especifica, maybe thats better

    return (
        <View>
            <ImageBackground style={styles.Fundo} source={padraoFundo}>
                <View style={styles.NoticiaContainer}>
                    <View style={{margin:20}}>
                        <Text style={styles.NoticiaTitulo}>{noticia.titulo}</Text>
                        <Text style={styles.DataPub}>Data de Publicação: {noticia.data}</Text>
                        <Text style={styles.NoticiaDescriçao}>{noticia.descriçao}</Text>
                        <Text style={styles.NoticiaAnexo}>Anexos: {"\n"}
                            {noticia.anexos.map((anexo, index) =>(
                                <View key={index}>
                                    <Text style={{fontSize: 14, color: "purple" }} onPress={() => Linking.openURL(anexo.link)}>{anexo.nome} {"\n"} </Text>
                                </View>
                            ))}
                        </Text>
                        <Text style={styles.NoticiaCategoria}>Categorias: {"\n"}
                            {noticia.categorias.map((category,index) =>(
                                <View key={index}>
                                    <Text style={{fontSize: 16, color: "purple"}}>{category} {" "}</Text>
                                </View>
                            ))}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
      );
  }
  
  const styles = StyleSheet.create({
    Fundo:{
        width:390,
        height:800,
    },

    NoticiaContainer: {
        backgroundColor: 'purple',
        backgroundColor: '#dedede',
        margin: 20,
        marginTop: 70,
        },
    
    NoticiaTitulo:{
      fontWeight: 'bold',
      fontSize: 19,
    },
  
    DataPub: {
        color: "grey",
        fontSize: 12,
        marginBottom: 30
    },

    NoticiaDescriçao: {
        color: "black",
        fontSize: 16,
        marginBottom: 15
    },

    NoticiaAnexo: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },

    NoticiaCategoria: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 16
    }
    
});