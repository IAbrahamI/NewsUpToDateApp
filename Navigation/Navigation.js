import React, { useState, useEffect} from 'react';
import NewsList from '../Components/NewsList';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import NewsApi from '../API/NewApi';

const Navigator = () => {

  const [newsList, setNewsList] = useState([]);

  useEffect(()=>{
    getNewsFromApi();
  },[])

  function getNewsFromApi(){
    NewsApi.get('top-headlines?country=ch&apiKey=af2a175e5d0f4c6593ca7c3938834a07')
    .then(async function(response){
      setNewsList(response.data);
      console.log(newsList);
    })
    .catch(function(error){
      console.log(error);
    })
  }
  if(!newsList){
    return null
  }
    return(
        <View>
          <FlatList 
            data={newsList.articles}
            keyExtractor={(item, index) =>'key' + index}
            renderItem = {({item}) =>{
              return(
                <NewsList item = {item}/>
              );
            }}
          />
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