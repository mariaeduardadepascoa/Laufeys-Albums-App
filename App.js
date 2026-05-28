import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Albums from './src/components/Albums.js';

const Stack = createNativeStackNavigator();

// FUNÇÃO QUE EXIBE A TELA HOME
function HomeScreen({ navigation }) {
  return (
    <View style={styles.fundo}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false} >
        {Albums.map((album) => {
          return (
            <View style={styles.card} key={album.id}>
              <Image style={styles.album} source={album.albumPicture} />
              <View style={styles.viewTexts}>
                <Text style={styles.nameAlbum}>{album.titleAlbum}</Text>
                <Text style={styles.nameSinger}>{album.singer}</Text>
                <Pressable onPress={() => navigation.navigate('Details', { albumId: album.id })} style={styles.botao}>
                  <Text style={styles.textButton}>Ver detalhes</Text>
                </Pressable>
              </View>
              <StatusBar style="auto" />
            </View>
          );
        })}
      </ScrollView>
    </View >
  );
}

// FUNÇÃO QUE EXIBE A TELA DE DETALHES
function Details({ route }) { // {navigation, albumId} não funciona pq vai tudo para o route.params, por isso route
  const { albumId } = route.params;

  const album = Albums.find((album) => album.id === albumId); //.find() -> encontra SÓ UM onde o id corresponde ao id do album clicado

  return (
    <ScrollView contentContainerStyle={styles.fundo2}>
      <Image style={styles.album2} source={album.albumPicture} />
      <Text style={styles.nameAlbum}>{album.titleAlbum}</Text>
      <Text style={styles.description}>{album.details}</Text>
      <StatusBar style="auto" />
    </ScrollView>
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
        <Stack.Screen name="Albums" component={HomeScreen} options={{
          headerTitleAlign: 'center',
          headerStyle: {
            height: 80,
            backgroundColor: 'rgb(255, 255, 255)',
            borderBottomWidth: 0, //remove a linhazinha branca de baixo
          },
          headerTintColor: '#2338c5',
        }} />
        <Stack.Screen name='Details' component={Details} options={{
          headerStyle: {
            height: 80,
            backgroundColor: '#fff',
            borderBottomWidth: 0, //remove a linhazinha branca de baixo
          },
          headerTintColor: '#2338c5',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// SEÇÃO DE ESTILIZAÇÃO
// Usar números normais -> sao inteligentes (densidade independente)
const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    alignItems: 'center',
    justifyContent: 'center',

  },

  fundo2: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    alignItems: 'center',
    justifyContent: 'center',

  },

  scrollView: {
    gap: 25,
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#fff',
    width: 280,
    height: 380,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    padding: 10,
  },

  viewTexts: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: -40,
    borderRadius: 25,
    paddingVertical: 10,
  },

  album: {
    width: "100%",
    height: '95%',
    borderRadius: 25,
    marginBottom: 20,
  },

  nameAlbum: {
    color: '#1b1b1b',
    width: "94%",
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: "BodoniModa"
  },

  nameSinger: {
    color: '#c5c5c5',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Roboto'
  },

  botao: {
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#2338c5',
  },
  
  textButton: {
    fontSize: 15,
    color: "#fff"
  },

  album2: {
    width: 260,
    height: 230,
    borderRadius: 20,
    marginBottom: 20,
  },

  description: {
    color: '#363636',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'justify',
    width: 250,
  }
});
