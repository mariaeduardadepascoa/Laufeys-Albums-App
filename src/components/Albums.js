import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

// ARRAY DE ALBUMS
const Albums = [
    {
        id: 1,
        albumPicture: require('../../assets/laufey.webp'),
        titleAlbum: "Everything I Know About Love",
        singer: 'Laufey', 
        details: `Everything I Know About Love, da Laufey, é um álbum que mistura jazz e pop para retratar as emoções do amor jovem. Com letras sensíveis, ela fala sobre paixão, decepções e amadurecimento, criando uma atmosfera íntima e nostálgica.`,
    },

    {
        id: 2,
        albumPicture: require('../../assets/image.png'),
        titleAlbum: "A Night At The Symphony (2023)",
        singer: 'Laufey', 
        details: `A Night At The Symphony é um álbum ao vivo da Laufey com a Orquestra Sinfônica da Islândia, lançado em 2 de março de 2023. A escolha de levar suas composições para um palco orquestral não é apenas estética: é uma forma de intensificar a carga emocional que já existe nas letras e melodias dela. O material musical deste álbum vem de, principalmente, Everything I Know About Love e Typical of Me. `,
    },


    {
        id: 3,
        albumPicture: require('../../assets/bewitched-cover.webp'),
        titleAlbum: "Bewitched (2023)",
        singer: 'Laufey', 
        details: `Bewitched foi lançado em 8 de setembro de 2023. Ele é descrito como um reflexo do amor, abordando diversas facetas do romance, e inclui baladas de jazz pop e músicas do gênero Bossa Nova, como o single "From the Start" que é uma das músicas mais famosas da cantora. Descrito pela própria artista como "um álbum sobre o amor — seja por um amigo, um parceiro ou pela vida."`,
    },


    // {
    //     id: 4,
    //     albumPicture: require('../../'),
    //     titleAlbum: "",
    //     singer: 'Laufey', 
    //     details: ``,
    // },

    // {
    //     id: 5,
    //     albumPicture: require('../../'),
    //     titleAlbum: "",
    //     singer: 'Laufey', 
    //     details: ``,
    // },

    // {
    //     id: 6,
    //     albumPicture: require('../../'),
    //     titleAlbum: "",
    //     singer: 'Laufey', 
    //     details: ``,
    // },

    // {
    //     id: 7,
    //     albumPicture: require('../../'),
    //     titleAlbum: "",
    //     singer: 'Laufey', 
    //     details: ``,
    // },
]

export default Albums;