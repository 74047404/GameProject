import { View, Text, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const PlayerScreen = ({ navigation }) => {
    //react hooks
    const [firstplayer, setfirstplayer] = React.useState('')
    const [secondtplayer, setsecondplayer] = React.useState('')
    const [firsterror, setfirsterror] = React.useState("")
    const [seconderror, setseconderror] = React.useState("")

    //hanadle continue button
    const handleOnPress = () => {
        if (firstplayer === '') {
            setfirsterror("Enter first player name");
        } else if (secondtplayer === '') {
            setseconderror("Enter your second name");
        } else {
            navigation.navigate("GameScreen", {
                firstname: firstplayer,
                secondname: secondtplayer
            });
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, marginTop: "20%" }}>

            {/* {for statusbar} */}
            <StatusBar barStyle="dark-content" />
            
            <View style={{ marginLeft: 30 }}>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "black"
                    }}
                >
                    Player 1 name
                </Text>
                <View
                    style={{
                        height: 40,
                        width: "80%",
                        borderWidth: 1,
                        borderColor: "black",

                    }}
                >
                    <TextInput
                        style={{ color: "black", marginLeft: 10, fontSize: 18, fontWeight: "bold", height: 40, width: "80%" }}
                        value={firstplayer}
                        onChangeText={(txt) => { setfirstplayer(txt),setfirsterror("") }}
                    />

                </View>

                {/* for error show */}
                {firsterror ?
                    <Text style={{ color: "red", fontWeight: "500", fontSize: 14 }}>{firsterror}</Text> :
                    null
                }

                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "black",
                        marginTop: 30
                    }}
                >
                    Player 2 name
                </Text>
                <View
                    style={{
                        height: 40,
                        width: "80%",
                        borderWidth: 1,
                        borderColor: "black",

                    }}
                >
                    <TextInput

                        style={{ color: "black", marginLeft: 10, fontSize: 18, fontWeight: "bold", height: 40, width: "80%" }}
                        value={secondtplayer}
                        onChangeText={(txt) => { setsecondplayer(txt),setseconderror("") }}
                    />
                </View>

                {/* for error show */}
                {seconderror ?
                    <Text style={{ color: "red", fontWeight: "500", fontSize: 14 }}>{seconderror}</Text> :
                    null
                }
            </View>
            
           {/* continue button */}
            <TouchableOpacity
                onPress={handleOnPress}
                style={{
                    height: 50,
                    width: "90%",
                    borderWidth: 1,
                    backgroundColor: "black",
                    borderRadius: 25,
                    marginTop: "20%",
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text
                    style={{
                        color: "white",
                        fontSize: 22,
                        fontWeight: "bold"
                    }}
                >
                    Continue
                </Text>

            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default PlayerScreen