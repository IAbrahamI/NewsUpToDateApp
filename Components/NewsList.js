import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const NewsList = ({}) =>{
    return(
        <View style={styles.list}>
            <Text style={styles.title}>Moderna: Erster mRNA-Impfstoff gegen Grippe - BILD</Text>
            <Text style={styles.author}>Bild.de</Text>
            <Image style={styles.image}></Image>
            <Text style={styles.description}>US-Pharmahersteller Moderna zum ersten Mal auch die Entwicklung eines mRNA-Impfstoff gegen saisonale Grippe gelungen. Er soll vor 4 Varianten schützen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    list:{
        backgroundColor: 'white',
        margin: width*0.03,
        borderRadius: width *0.05,
        shadowColor: '#000',
        shadowOffset: {width:0.5, height:1},
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title:{
        width: width,
        marginHorizontal: width*0.05,
        marginVertical: width*0.03,
        color: 'black',
        fontWeight: 'bold',
        maxWidth: '90%',
        fontSize: 20
    },
    description:{
        marginHorizontal: width*0.02,
        margin: width*0.02,
        color: 'lightgray',
        maxWidth: '95%',
        fontSize: 18
    },
    author:{
        marginHorizontal: width*0.05,
        fontSize: 15,
        color: 'lightgray'
    },
    image:{
        width: width,
        height: height/6,
        marginHorizontal: width*0.05,
        marginVertical: height*0.02

    }
});

export default NewsList;