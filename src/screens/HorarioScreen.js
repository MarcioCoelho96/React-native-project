import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Linking, ScrollView, SafeAreaView, TouchableOpacityBase,TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown'
import CursoData from '../components/CursoData';
import HorarioData from '../components/HorariosData.js';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { indexOf } from 'lodash';

//vai ate hours[30]
const hours = ['08:00-08:30', '08:30-09:00','09:00-09:30','09:30-10:00', '10:00-10:30','10:30-11:00','11:00-11:30','11:30-12:00','12:00-12:30','12:30-13:00','13:00-13:30','13:30-14:00','14:00-14:30', '14:30-15:00','15:00-15:30','15:30-16:00','16:00-16:30','16:30-17:00','17:00-17:30','17:30-18:00','18:00-18:30','18:30-19:00','19:00-19:30','19:30-20:00','20:00-20:30','20:30-21:00','21:00-21:30','21:30-22:00','22:00-22:30','22:30-23:00','23:00-23:30']
const diasSemana = ['teste', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']




export default function HorariosScreen() {

    const [cadeira, setcadeira] = useState()
    const [sala, setsala] = useState()
    const [turno, setturno] = useState()
    const [diaSemana, setdiaSemana] = useState()
    const [startTime, setstartTime] = useState()
    const [endTime, setendTime] = useState()
    const [verifyCadeiraContainer, setverifyCadeiraContainer] = useState(false)

    const[ VerifyCadeira, setVerifyCadeira ] = useState(false)
    var cursoArr = []
    var cadeiraArr = []

    function mapCurso(){

        CursoData.Curso.map((curso, index) =>(
            cursoArr[index] = `${curso.Ano}º - ${curso.curso}`
            
        ))
        
        return cursoArr
    }
    
    function getCadeira(CursoSelected, AnoSelected){
        HorarioData.horario.map(function(aula, index) {
            if(aula.curso == CursoSelected && aula.Ano == AnoSelected){
                setVerifyCadeira(true)
                if(aula.turno== null){
                    cadeiraArr[index] = `${aula.cadeira}`
                }else{
                cadeiraArr[index] = `${aula.turno} - ${aula.cadeira}`
                }
            }else{}
        })
        return cadeiraArr
    }

    function CadeiraContainer(CadeiraSelected, selectedItem, index){
        // function teste(index) {
        //     return HorarioData.horario.filter(item => {
        //       return item.id === index
        //     })
            
        //   };
        var hello = HorarioData.horario.filter(item => item.id === index)

        setcadeira(hello.cadeira)
        setsala(hello.sala)
        setturno(hello.turno)
        setdiaSemana(hello.diaSemana)
        setstartTime(hello.startTime)
        setendTime(hello.endTime)
        setverifyCadeiraContainer(true)
        
    }

    const tabela = {
        tableHead: ['','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
        tableData: [
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],
            ['', '', '', '', '', ''],     
        ],
        tableFooter: [''],
    }
    
    function teste(){
        return(
            <TouchableOpacity><Text>Click Me</Text></TouchableOpacity>
        )
    }

    const cadeirateste = {

        "id": "11", 
        "curso": "Análises Químicas e Biológicas (CTeSP)",
        "Ano": "2",
        "diaSemana": "Quinta",
        "startTime": "09:00-09:30", 
        "endTime": "10:30-11:00",
        "cadeira": "QO [T]",
        "sala": "112",
        "turno": "A"
    }

    useEffect(() => {
        mapCurso()
      });

    return (
        <View>
            <View>
                
                {/* <Picker  selectedValue={pickerValue} onValueChange={(itemValue) => setPickerValue(itemValue)}>
                    
                            <Picker.Item label='Javascript' value='Javascript'/>
                            <Picker.Item label='Java' value='Java'/>
                            <Picker.Item label='c#' value='c#'/>
                </Picker> */}
                <SelectDropdown
                    //dropdownStyle={styles.DropDown}
                    data={cursoArr}
                    onSelect={(selectedItem, index) => {
                        var CursoSelected = selectedItem.split('º - ')[1]
                        var AnoSelected = selectedItem.split('º - ')[0]
                        var cadeiraArr = []
                        console.log(cadeiraArr)
                        getCadeira(CursoSelected, AnoSelected)
                    }}
                    defaultButtonText={"Selecione curso"}
                    buttonStyle={styles.CursoButtonStyle}
                    buttonTextStyle={styles.CursoButtonTextStyle}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    dropdownIconPosition={"right"}
                    dropdownStyle={styles.CursoDropdownStyle}
                    rowStyle={styles.CursoDropdownRowStyle}
                    rowTextStyle={styles.CursoDropdownTextStyle}
                />

                { VerifyCadeira == true &&
                    <SelectDropdown
                    //dropdownStyle={styles.DropDown}
                    data={cadeiraArr}
                    onSelect={(selectedItem, index) => {
                        if(selectedItem.includes('-')){
                            var CadeiraSelected = selectedItem.split('- ')[1]
                            console.log(index)
                            CadeiraContainer(CadeiraSelected, index)
                        }else{
                            console.log(index)
                            CadeiraContainer(selectedItem, index)
                        }
                    }}
                    defaultButtonText={"Selecione Cadeira"}
                    buttonStyle={styles.CadeiraButtonStyle}
                    buttonTextStyle={styles.CadeiraButtonTextStyle}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                    dropdownStyle={styles.CadeiraDropdownStyle}
                    rowStyle={styles.CadeiraDropdownRowStyle}
                    rowTextStyle={styles.CadeiraDropdownTextStyle}
                />}
                {verifyCadeiraContainer == true &&
                <View style={styles.CadeiraContainer}>
                    <View>
                        <Text style={styles.CadeiraContainerText}>{cadeira}</Text>
                        <Text style={styles.CadeiraContainerText}>{sala}</Text>
                        <Text style={styles.CadeiraContainerText}>{turno}</Text>
                    </View>
                    <View>
                        <Text style={styles.CadeiraContainerText}>{diaSemana}</Text>
                        <Text style={styles.CadeiraContainerText}>{startTime}</Text>
                        <Text style={styles.CadeiraContainerText}>{endTime}</Text>
                    </View>
                    
                </View>
                }
            </View>
            <View>
                <ScrollView style={styles.teste}>
                        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                            <Row data={tabela.tableHead} style={styles.head} textStyle={styles.text}/>
                            <Rows data={tabela.tableData} textStyle={styles.text}/>
                            {/* <Row data={tabela.tableFooter} style={styles.head} textStyle={styles.text}/> */}
                            
                        </Table>
                </ScrollView>
            </View>
        </View>
        );
  }
  
  const styles = StyleSheet.create({

    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 50, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },

    
    teste:{
        position: 'relative',
        marginTop: 160,
        marginLeft: -10,
        width: 420,
        transform: [{  
             rotate: "90deg" }],
    },


    CursoButtonStyle: {
        height: 50,
        width: 180,
        marginTop: 110,
        marginRight: 240,
        backgroundColor: "#444",
        borderRadius: 8,
        transform: [{  
            rotate: "90deg" }]
    },

    CursoButtonTextStyle: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold",
    },

    CursoDropdownStyle: { 
        marginLeft: -130, 
        marginTop: -177, 
        borderRadius: 8, 
        height:200, 
        backgroundColor: "#444", 
        transform: [{  
        rotate: "90deg" }],
    },

    CursoDropdownRowStyle: { 
        backgroundColor: "#444", 
        borderBottomColor: "#C5C5C5" 
    },

    CursoDropdownTextStyle: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold",
    },

    CadeiraButtonStyle: {
        height: 50,
        width: 180,
        marginTop: -50,
        marginRight: 150,
        backgroundColor: "#444",
        borderRadius: 8,
        transform: [{  
            rotate: "90deg" }]
    },

    CadeiraButtonTextStyle: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold",
    },

    CadeiraDropdownStyle: { 
        marginLeft: -130, 
        marginTop: -177, 
        borderRadius: 8, 
        height:200, 
        backgroundColor: "#444", 
        transform: [{  
        rotate: "90deg" }],
    },

    CadeiraDropdownRowStyle: { 
        backgroundColor: "#444", 
        borderBottomColor: "#C5C5C5" 
    },

    CadeiraDropdownTextStyle: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold",
    },

    CadeiraContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 180,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        marginTop: -75,
        marginLeft: 20,
        backgroundColor:'#c7c7c7',
        transform: [{  
            rotate: "90deg" }]
    },

    CadeiraContainerText:{
        fontSize: 17,
        margin:4,
    }

});

