import * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';

const {width, height} = Dimensions.get('window');

const NewsList = ({item}) =>{

    handleClick = () =>{
        Linking.openURL(item.url);
    };
    return(
        <TouchableOpacity onPress={this.handleClick}>
           <View style={styles.list}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
            <Image style={styles.image} source={{uri: item.urlToImage}}/>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.date}>{item.publishedAt}</Text>
         </View> 
        </TouchableOpacity>
        
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
        marginTop: height*0.01,
        color: 'black',
        fontWeight: 'bold',
        maxWidth: '90%',
        fontSize: 20
    },
    description:{
        width: width,
        marginHorizontal: width*0.05,
        margin: width*0.02,
        color: 'lightgray',
        maxWidth: '90%',
        fontSize: 18
    },
    author:{
        marginHorizontal: width*0.05,
        fontSize: 15,
        color: 'lightgray'
    },
    image:{
        width: width,
        height: height/4,
        maxWidth: '90%',
        marginHorizontal: width*0.05,
        marginVertical: height*0.02

    },
    date:{
        width: width,
        color: 'gray',
        marginHorizontal: width*0.05,
        marginBottom: 5 
    }
});

export default NewsList;