import React, {useEffect,useState} from "react";
import { View, Text, Alert,ScrollView} from 'react-native';
import apiClient from "./services/apiClient";
import Style from './services/appStyle'
import GameCard from "./components/GameCard";

const App = () => {

  const [games, setGames] = useState([]);

  const loadData = () => {
    apiClient.get('/games')
    .then(res => {
      setGames(res.data.results)
    })
    .catch(err => {
      Alert.alert('Load Games', err.message)
    })
  }

  useEffect(() => {
    loadData();
  },[])

  return(
    <>
      <ScrollView>
      <View style={Style.container}>
        {
          games.map(item => (
            <GameCard item={item} />
          ))
        }
      </View>
      </ScrollView>
    </>
  )
}

export default App;