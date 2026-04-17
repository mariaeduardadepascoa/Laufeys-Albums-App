import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();

// FUNÇÃO QUE EXIBE A TELA HOME
function HomeScreen({navigation}) {
  return (
    <View style={styles.fundo}>
      <View style={styles.card}>
      <Image style={styles.album} source={require('./assets/laufey.webp')} />

      <Text style={styles.nameAlbum}>
        Everything I Know About Love
      </Text>

      <Text style={styles.nameSinger}>
        Laufey
      </Text>

      <Pressable onPress={() => navigation.navigate('Details')} style={styles.botao}>
        <Text style={styles.textButton}>Ver detalhes</Text>
      </Pressable>

      <StatusBar style="auto" />
      </View>
    </View>
  );
}

// FUNÇÃO QUE EXIBE A TELA DE DETALHES
function Details({navigation}) {
  return (
    <View style={styles.fundo}>
      
      <Image style={styles.album2} source={require('./assets/laufey.webp')} />

      <Text style={styles.description}>Everything I Know About Love, da Laufey, é um álbum que mistura jazz e pop para retratar as emoções do amor jovem. Com letras sensíveis, ela fala sobre paixão, decepções e amadurecimento, criando uma atmosfera íntima e nostálgica.</Text>

      {/* <Pressable onPress={() => navigation.goBack()} style={styles.botao}>
        <Text style={styles.nameAlbum}>Voltar</Text>
      </Pressable> */}

      <StatusBar style="auto" />
    </View>
  );
}

// APP -> ONDE CHAMA OS STACK'S
export default function App() {

  // carregamento das fontes
  const [fontsLoaded] = useFonts({
    'BodoniModa': require('./assets/fonts/BodoniModa-Italic-VariableFont_opsz,wght.ttf'),
    'Roboto': require('./assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Albums" component={HomeScreen} options={{headerTitleAlign: 'center',
          headerStyle: {
            height: 80,
            backgroundColor: 'rgb(156, 174, 198)',
            borderBottomWidth: 0, //remove a linhazinha branca de baixo
          }
        }}/> 
        <Stack.Screen name='Details' component={Details}/>
        {/*headerShown: false tira o header */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// SEÇÃO DE ESTILIZAÇÃO
// Usar números normais -> sao inteligentes (densidade independente)
const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#aabcd5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    flex: 2,
    backgroundColor: '#fff',
    borderRadius: 25,
    width: 285,
    maxHeight: 450,
    alignItems: 'center',
    justifyContent: 'center',
  },

  album: {
    width: 230,
    height: 230,
    borderRadius: 20,
    marginBottom: 20,
  },

  nameAlbum: {
    color: '#1b1b1b',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: "BodoniModa"
  }, 

  nameSinger: {
    color: '#1b1b1b',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Roboto'
  },

  botao: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#2338c5'
  },

  textButton: {
    color: "#fff"
  },

  album2: {
    width: 280,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },

  description: {
    color: '#363636',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'justify',
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    paddingLeft: 20,

  }
});
