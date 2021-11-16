import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Linking, Image, SafeAreaView, TextInput } from 'react-native';
import axios from 'axios'
import filter from 'lodash.filter';
import { useNavigation } from '@react-navigation/native'
import LogoExtensoIPB from '../../assets/LogoExtensoIPB.png'
//import NewsData from '../components/noticiasData';

export default function NoticiasScreen() {

  const NewsData = {
    "noticias": [
      {"id": "1", "pagina": "1", "titulo": "Concurso para atribuição de uma Bolsa de Investigação (BI)", "data": "12/02/2021", "descriçao": "Concurso para atribuição de uma Bolsa de Investigação (BI)Encontra-se aberto concurso para atribuição de uma Bolsa de Investigação (BI) no âmbito do Projeto “VRSchool”, com financiamento “Erasmus + KA2”, nas seguintes condições", "anexos": [{"nome":"Edital", "link":"https://atualidades.ipb.pt/sistema/anexos/1299_1613125081.pdf"}], "categorias": ["Noticias", "Alunos", "Bolsa de Investigação", "IPB"]},
      {"id": "2", "pagina": "1", "titulo": "Concurso para atribuição de três Bolsas de Investigação (BI)", "data": "11/02/2021", "descriçao": "ncontra-se aberto concurso para atribuição de três Bolsas de Investigação (BI) no âmbito do Projeto “: Bis+Olive .: Uso de bagaço de azeitona na alimentação de suínos da raça BísaAvaliação do efeito no crescimento e qualidade da carne (Código da Operação NORTE-01-0247-FEDER-072234)”", "anexos": [{"nome":"Edital", "link":"https://atualidades.ipb.pt/sistema/anexos/1298_1613039639.pdf"}], "categorias": ["Noticias", "Bolsa de Investigação", "IPB", "Alunos"]},
      {"id": "3", "pagina": "1", "titulo": "Concurso para atribuição de uma Bolsa de Investigação (BI)", "data": "10/02/2021", "descriçao": "Encontra-se aberto concurso para atribuição de uma Bolsa de Investigação (BI) no âmbito do Projeto “SmartHealth - Inteligência Artificial para Cuidados de Saúde Personalizados ao Longo da Vida ( NORTE-01-0145-FEDER-000045). Referência da bolsa: BI.IPB/SmartHealth.”", "anexos": [{"nome":"Edital", "link":"https://atualidades.ipb.pt/sistema/anexos/1297_1612959980.pdf"}], "categorias": ["Avisos", "IPB", "CeDRI"]},
      {"id": "4", "pagina": "1", "titulo": "Concurso para atribuição de uma Bolsa de Investigação Pós-Doutoral(BIPD)", "data": "09/02/2021", "descriçao": "Encontra-se aberto concurso para atribuição de uma Bolsa de Investigação Pós-Doutoral(BIPD) no âmbito do Projeto “OliveBIOextract - Aproveitamento sustentável do bagaçode azeitona numa cadeia de valorização integrada utilizando processos inovadores (NORTE-01-0247-FEDER-049865)”.", "anexos": [{"nome":"Edital", "link":"https://atualidades.ipb.pt/sistema/anexos/1296_1612875191.pdf"}], "categorias": ["Noticias", "Alunos", "Bolsa de Investigação", "IPB"]},
      {"id": "5", "pagina": "1", "titulo": "Concurso para atribuição de uma Bolsa de Investigação (BI)", "data": "08/02/2021", "descriçao": "Encontra-se aberto concurso para atribuição de uma Bolsa de Investigação (BI) no âmbito do Projeto “Bolsa de Investigação no âmbito de um projeto com a temática: Otimização de uma solução polimérica de base natural para revestimentos alimentares”, com financiamento “Prémio europeu dos plásticos&r", "anexos": [{"nome":"Edital", "link":"https://atualidades.ipb.pt/sistema/anexos/1294_1612798936.pdf"}], "categorias": ["Avisos", "Bolsa de Investigação", "IPB", "CIMO"]},
      {"id": "6", "pagina": "1", "titulo": "Concurso para atribuição de uma Bolsa de Investigação (BI)", "data": "01/02/2021", "descriçao": "Encontra-se aberto concurso para atribuição de uma Bolsa de Investigação (BI) no âmbito do Projeto “refª: PTDC/EQU-EPQ/0467/2020; Título: Separação do Hidrogénio Verde de Redes de Gás Natural por Processos de Adsorção com MOFs”", "anexos": [{"nome":"Aviso", "link":"https://atualidades.ipb.pt/sistema/anexos/1289_1612180939.pdf"}], "categorias": ["Noticias", "Bolsa de Investigação", "IPB", "ESTiG", "CIMO"]},
      {"id": "7", "pagina": "1", "titulo": "Candidaturas à Mobilidade Erasmus/Internacional (2021-22) - 1º Semestre", "data": "01/02/2021", "descriçao": "Estão abertas as candidaturas para as mobilidades Erasmus (estudos e estágios) e Internacional.Todos os estudantes do IPB interessados e devidamente matriculados devem submeter a candidatura online até dia 14 de Março de 2021.Para mais esclarecimentos:\n\naceder a http://www.ipb.pt/gri;\ncontactar a Coordenação Erasmus da Escola;\ncontactar o Gabinete de Relações Internacionais (GRI), localizado no edifício dos Serviços Centrais deste Instituto, Piso 0 sala 11.", "anexos": ["\"\"", "\"\""], "categorias": ["Avisos", "Alunos", "Mobilidade Internacional"]},
      {"id": "8", "pagina": "2", "titulo": "Concurso para atribuição de duas Bolsas de Investigação (BI)", "data": "26/01/2021", "descriçao": "Encontra-se aberto concurso para atribuição de duas Bolsas de Investigação (BI) no âmbito do Projeto “POCTEP DISRUPTIVE”, com financiamento “FEDER (Fundo Europeu de Desenvolvimento Regional) através do Programa INTERREG V A Espanha – Portugal (POCTEP) 2014-2020”", "anexos": [{"nome":"Edital", "link":"https://atualidades.ipb.pt/sistema/anexos/1288_1611684268.pdf"}], "categorias": ["Noticias", "Alunos", "Bolsa de Investigação", "IPB"]},
      {"id": "9", "pagina": "2", "titulo": "IPB ENGAGED Week", "data": "25/01/2021", "descriçao": "A IPB Engaged Week pretende constituir um momento de reflexão e de afirmação das opções estratégicas da instituição. O IPB é uma instituição empenhada com a sua região, com a qualificação das pessoas e com a promoção da inovação na economia. Para potenciar esta estratégia, constituiu uma ali europeias com orientações similares: a “European Engaged University”.Ligações:\n\nTransmissão online\nConvite\nPrograma\nBrochura\n\r\nNeste contexto, o dia 26 centra-se na discussão da estratégia conjunta, no seio da “Universidade Europeia” comum que se pretende construir, por via da definição conjunta de metodologias, formações e projetos de inovação. O evento inclui uma intervenção do Ministro da Ciência, Tecnologia e Ensino Superior sobre as perspetivas para a presidência portuguesa da União Europeia na área da Ciência e do Ensino Superior.O Dia 27 tem como tema genérico a relevância do mercado de trabalho na definição de uma instituição de ensino superior (IES) empenhada com a sua região. Conta com uma intervenção da OCDE na área das políticas do ensino superior (Thomas Weko – OECD Senior Policy Analyst and Team Leader), sobre as metodologias emergentes de credenciação de competências adquiridas em contexto de interação dos alunos com as empresas e a sociedade. Inclui também um momento de reflexão sobre a cooperação com as instituições similares do Brasil na implementação conjunta de estratégias de inovação formativa, bem como com uma perspetiva das políticas e oportunidades de financiamento para a implementação destas estratégias.O Dia do IPB, 28 de janeiro, centra-se sobre uma preocupação importante do IPB, enquanto instituição empenhada, neste período de crise global pandémica, com a importância dos mecanismos e instituições de cooperação internacional, em particular no domínio do combate às desigualdades globais, como forma de garantir a sustentabilidade e a resiliência das nossas sociedades. Sendo o IPB uma instituição fortemente internacionalizada e preocupada com a sua responsabilidade social, esta é uma questão central. Neste sentido, convidou-se Pedro Matos, coordenador de emergências do Programa Alimentar Mundial (WFP) no Sudão, para proferir a oração de sapiência. É também uma oportunidade para celebrar a atribuição do Prémio Nobel da Paz a esta instituição.O dia 29 prossegue com o foco na inovação, associando-se o IPB à ANI e ao MORE, que promove uma “ANI Innovation Talk”, centrada sobre a cooperação transfronteiriça e o programa nacional de recuperação e resiliência.The IPB Engaged Week aims to provide a moment for reflection and statement of the institution’s strategic options. The IPB is an institution committed to its region, to the qualification of people and to the promotion of innovation in the economy. In order to enhance this strategy, an alliance with other European universities with similar orientations was formed - the “European Engaged University”.As such, the 26th of January focuses on the discussion of the joint strategy, within the common “European University” to be built, through the joint definition of methodologies, training, and innovation projects. The day includes an intervention by the Portuguese Minister of Science, Technology and Higher Education on the prospects within the Portuguese Presidency of the European Union in the area of Science and Higher Education.The general topic of the 27th January is the relevance of the labour market in the definition of a higher education institution (HEI) truly committed to its region. This session comprises an OECD intervention in the area of Higher Education policies (Thomas Weko - OECD Senior Policy Analyst and Team Leader) on the emerging methodologies for accreditation of competences acquired in the context of students’ interaction with companies and society. It also includes a moment of reflection on the cooperation with similar institutions in Brazil framed in the joint implementation of training innovation strategies, as well as a perspective of policies and funding opportunities for the implementation of these strategies.The IPB Day, January 28th, focuses on an important concern of the IPB as an engaged institution in this period of global pandemic crisis. The importance of international cooperation mechanisms and institutions, particularly while fighting inequalities is viewed as a way to ensure the sustainability and resilience of our societies.This is a central issue for the IPB as a highly internationalized institution and highly committed to its social responsibility. In this sense, Pedro Matos, the emergency coordinator of the World Food Program (WFP) in Sudan, was invited to offer the Lectio Magistralis. It also constitutes an opportunity to celebrate the award of the Nobel Peace Prize to this institution.The 29th January will aim at innovation, with the IPB joining ANI and MORE, thus promoting an “ANI Innovation Talk”, focusing on cross-border cooperation and the national program of recovery and resilience.", "anexos": [{"nome":"Convite", "link":"https://atualidades.ipb.pt/sistema/anexos/1287_1611597544.pdf"}, {"nome":"Programa", "link":"https://atualidades.ipb.pt/sistema/anexos/1287_1611597552.pdf"}, {"nome":"Brochura", "link":"https://atualidades.ipb.pt/sistema/anexos/1287_1611748936.pdf"}], "categorias": ["Eventos", "IPB"]},
      {"id": "10", "pagina": "2", "titulo": "Concurso para atribuição de uma Bolsa de Investigação (BI)", "data": "19/01/2021", "descriçao": "Concurso para atribuição de uma Bolsa de Investigação (BI)Encontra-se aberto concurso para atribuição de uma Bolsa de Investigação (BI) no âmbito do Projeto “GreenHealth: Estrategias digitais e baseadas em ativos biológicos para melhorar o bem-estar e promover a sau?de verde (Norte-01-0145-FEDER-000042).", "anexos": [{"nome":"Edital", "link":"https://atualidades.ipb.pt/sistema/anexos/1285_1611141233.pdf"}], "categorias": ["Noticias", "Alunos", "Bolsa de Investigação", "IPB"]},
      {"id": "11", "pagina": "2", "titulo": "Concurso para atribuição de uma Bolsa de Iniciação à Investigação (BII)", "data": "18/01/2021", "descriçao": "Concurso para atribuição de uma Bolsa de Iniciação à Investigação (BII)Encontra-se aberto concurso para atribuição de uma Bolsa de Iniciação à Investigação (BII) no âmbito do Projeto “Isolamento, caracterização e identificação de microrganismos com aplicações biotecnol&oac", "anexos": [{"nome":"Edital", "link":"https://atualidades.ipb.pt/sistema/anexos/1283_1610978679.pdf"}], "categorias": ["Noticias", "Alunos", "Bolsa de Investigação", "IPB"]},
      {"id": "12", "pagina": "2", "titulo": "Concurso para atribuição de uma Bolsa de Investigação (BI)", "data": "04/01/2021", "descriçao": "Encontra-se aberto concurso para atribuição de uma Bolsa de Investigação (BI) no âmbito do Projeto “CybersSEC IP - CYBERSecurity SciEntific Competences and Innovation Potential (NORTE-01-0145-FEDER-000044)”.", "anexos": [{"nome":"Edital", "link":"https://atualidades.ipb.pt/sistema/anexos/1272_1609755998.pdf"}], "categorias": ["Noticias", "Alunos", "Bolsa de Investigação", "IPB"]},
    ]
    }
    
  const navigation = useNavigation();

  const [NoticiasData, setNoticiasData] = useState()
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (text) => {
    const formattedQuery = text
    const filteredData = filter(fullData, noticias => {
      return contains(noticias, formattedQuery);
    });
    setNoticiasData(filteredData);
    setQuery(text);
  };

  const contains = ({titulo}, query) => {
    if (titulo.includes(query)) { 
      return true;
    }

    return false;
  };

  const fetchApi = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/noticias');
      console.log(response.data);
      setNoticiasData(response.data)
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi(); 
    setFullData(NewsData.noticias)
    setNoticiasData(NewsData.noticias)
  }, []);

  return(
    <View>
        <View style={{alignItems: 'center'}}>
            <Image
              style={styles.Logotipo}
              source={LogoExtensoIPB}
            />
        </View>
        <View style={{justifyContent: 'space-between'}}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={query}
            onChangeText={queryText => handleSearch(queryText)}
            placeholder="Procure uma noticia"
            placeholderTextColor='black' 
            style={{ backgroundColor: '#dedede', paddingHorizontal: 20, marginLeft: 35, marginTop: -10, borderWidth: 0, borderRadius: 20, width: 325, height: 35}}
              />
          <FlatList 
              style={{margin: 20}}         
              numColumns={1}
              keyExtractor={(item) => item.id}
              data={NoticiasData}
              renderItem={({item, index}) => (
                <TouchableOpacity style={styles.Noticiabotao} onPress={() => navigation.navigate('Noticia', {id: item.id, pagina: item.pagina, titulo: item.titulo, data: item.data, descriçao: item.descriçao, anexos: item.anexos, categorias: item.categorias})}>
                  <Text style={styles.Titulo}>{item.titulo}{' '}-{' '}
                    <View style={{ backgroundColor: 'lightpink'}}>
                      <Text  numberOfLines={1} style={styles.Descricao}>{item.descriçao}
                      </Text>
                    </View>
                  </Text>
                  
                  <Text style={styles.Data}>{item.data}</Text>
                </TouchableOpacity>
              )}     
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Logotipo: {
    width: 320,
    height: 100,
    marginTop: 30
  },

  Noticiabotao:{
    borderWidth: 1,
    borderRadius: 11,
    backgroundColor: '#CCCCCC',
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginLeft: 13,
    marginRight: 13,
    height: 85,
    marginBottom: 16,
  },

  Titulo: {
    alignSelf: 'center',
    marginTop: 13,
    marginLeft: 13,
    marginRight: 12,
    fontSize: 16,
    fontWeight:'bold', 
    color: "black",
  },

  Descricao: {
    fontWeight: 'normal',
    marginTop: -16,
    marginLeft: 1,
    position: 'absolute',
    width:130,
    fontSize: 15,
  },

  Data: {
    color: '#666666',
    fontWeight: 'bold', 
    fontSize: 13,
    marginTop: 5,
    marginLeft: 245,
  },

  funciona: {
    flexDirection: 'column',
  },

  teste: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    backgroundColor: 'lightblue',
    
  },

  verMais: {
    color: 'red'
  }
  
});