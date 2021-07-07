import * as React from 'react';
import NewsList from '../Components/NewsList';
import { View, Text, StyleSheet } from 'react-native';

const Navigator = () => {
    return(
        <View>
            <NewsList/>
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