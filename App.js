import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.fundo}>
      <Image style={styles.album} source={require('./assets/laufey.webp')}></Image>
      <Text style={styles.nameAlbum}>Everything I Know About Love</Text>
      <Text style={styles.nameSinger}>Laufey</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#aabcd5',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  album: {
    width: '80vw',
    height: '80vw',
    marginBottom: '1rem'
  },

  nameAlbum: {
    color: '#fff',
    fontSize: '1.2rem',
    fontFamily: "Bodoni Moda",
    marginBottom: '0.5rem'
  }, 

  nameSinger: {
    color: '#e4e4e4',
    fontWeight: '700',
    fontSize: '1.05rem',
    fontFamily: 'Roboto'
  }
});
