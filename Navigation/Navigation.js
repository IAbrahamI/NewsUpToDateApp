import React, { useState, useEffect, useRef} from 'react';
import NewsList from '../Components/NewsList';
import * as Notifications from 'expo-notifications';
import { View, Text, StyleSheet, FlatList, RefreshControl, Button } from 'react-native';
import NewsApi from '../API/NewApi';

const Navigator = () => {

  const [refreshing, setRefreshing] = React.useState(false);
  const [newsList, setNewsList] = useState([]);

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(()=>{
    getNewsFromApi();

    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    notificationListener.current = Notifications.addNotificationReceivedListener(notification =>{
      setNotification(notification);
    });
    responseListener.current = Notifications.addNotificationResponseReceivedListener( response =>{
      console.log(response);
    });
    schedulePushNotification();
  },[])

  const onRefresh = React.useCallback( () =>{
    setRefreshing(true);
    NewsApi.get('top-headlines?country=ch&apiKey=af2a175e5d0f4c6593ca7c3938834a07')
    .then(async function(response){
      setNewsList(response.data);
      setRefreshing(false);
    })
  },[refreshing]);

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

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "News Up To Date 📬",
        body: 'Schaue die Aktuelle News in der Schweiz!',
      },
      repeat: 'day',
      trigger: { seconds: 5 },
    });
  }

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
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
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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