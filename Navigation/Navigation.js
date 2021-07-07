import * as React from 'react';
import News from '../Components/News';
import { View, Text, StyleSheet } from 'react-native';

const Navigator = () => {
    return(
        <View>
            <News/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    }
  });
  
export default Navigator;