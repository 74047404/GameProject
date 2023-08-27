import { View, Text, SafeAreaView, TouchableOpacity,StatusBar } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementPlayer1, incrementPlayer2, resetStore } from './redux/action'
import AsyncStorage from '@react-native-async-storage/async-storage'

const GameScreen = ({ route, navigation }) => {
  // data retraive using params
  const firstname = route?.params?.firstname
  const secondname = route?.params?.secondname

  //store state
  const dispatch = useDispatch()

  //get state
  const player1Score = useSelector(state => state.player1Score);
  const player2Score = useSelector(state => state.player2Score);

  //score diffrent
  const scoreDifference = (player1Score - player2Score);
  const Differce = Math.abs(scoreDifference)

  //winner logic
  let currentWinner = "No winner";
  if (scoreDifference > 0) {
    currentWinner = firstname;
  } else if (scoreDifference < 0) {
    currentWinner = secondname;
  }

//store data in localstorage
  const data = {
    firstname,
    secondname,
    player1Score,
    player2Score,
    currentWinner,
    Differce
  }

  //handle savegame
  const HandleSaveGame = async () => {
    try {
      const dataString = JSON.stringify(data);
      await AsyncStorage.setItem('GameData', dataString);
      dispatch(resetStore())
      navigation.replace("PlayerScreen")

    } catch (error) {
      // Handle the error
      console.error("Error saving game data:", error);
    }
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
       {/* {for statusbar} */}
       <StatusBar barStyle="dark-content" />

       {/* for player1 */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "10%"
        }}
      >
        <Text style={{ fontSize: 24, color: "black", fontWeight: "bold" }}>{firstname}</Text>
        <Text style={{ fontSize: 24, color: "black", fontWeight: "bold" }}>:</Text>
        <TouchableOpacity
          onPress={() => { dispatch(incrementPlayer1()) }}
          style={{
            height: 40,
            width: "40%",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            borderRadius: 20
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Add wins</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "10%",

        }}
      >
        <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>Wins</Text>
        <Text style={{ fontSize: 24, color: "black", fontWeight: "bold" }}>:</Text>
        <View
          style={{
            width: "40%",
            height: 40
          }}
        >
          <Text style={{ color: "black", fontSize: 35, fontWeight: "600" }}>{player1Score}</Text>
        </View>
      </View>

      {/* for player2 */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "10%"
        }}
      >
        <Text style={{ fontSize: 24, color: "black", fontWeight: "bold" }}>{secondname}</Text>
        <Text style={{ fontSize: 24, color: "black", fontWeight: "bold" }}>:</Text>
        <TouchableOpacity
          onPress={() => { dispatch(incrementPlayer2()) }}
          style={{
            height: 40,
            width: "40%",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            borderRadius: 20
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Add wins</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "10%",

        }}
      >
        <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>Wins</Text>
        <Text style={{ fontSize: 24, color: "black", fontWeight: "bold" }}>:</Text>
        <View
          style={{
            width: "40%",
            height: 40
          }}
        >
          <Text style={{ color: "black", fontSize: 35, fontWeight: "600" }}>{player2Score}</Text>
        </View>
      </View>
      {/* for line */}
      <View style={{ height: 2, width: "90%", backgroundColor: "black", alignSelf: "center", marginTop: "10%" }}></View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "2%",

        }}
      >
        <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>Current winner</Text>
        <Text style={{ fontSize: 24, color: "black", fontWeight: "bold" }}>:</Text>
        <View
          style={{
            width: "40%",
            height: 40
          }}
        >
          <Text style={{ color: "black", fontSize: 24, width: "100%", fontWeight: "600" }}>{currentWinner}</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "2%",

        }}
      >
        <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>Wins difference</Text>
        <Text style={{ fontSize: 24, color: "black", fontWeight: "bold" }}>:</Text>
        <View
          style={{
            width: "40%",
            height: 40
          }}
        >
          <Text style={{ color: "black", fontSize: 35, fontWeight: "600" }}>{Math.abs(scoreDifference)}</Text>
        </View>
      </View>

      {/* for savegame button */}
      <TouchableOpacity
        onPress={HandleSaveGame}
        style={{
          height: 50,
          width: "90%",
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          alignSelf: "center",
          borderRadius: 20,
          marginTop: "30%"
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Save game</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default GameScreen