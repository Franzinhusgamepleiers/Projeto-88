import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SpaceCraftScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Tela Nave Espacial!</Text>
            </View>
        )
    }
}
const styles = Stylesheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.os === "android" ? StatusBar.currentHeight : 0
    },
    routeCard: {
      flex: 0.12,
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      marginLeft: 30,
    marginRight: 30,
    borderRadius: 100,
    backgroundColor: "white"
    },
    titleBar: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center"
    },
    titleText: {
      fontSize: 40,
      fontweight: "bold",
      color: "white"
    },
 
    routeText: {
      fontSize: 25,
      fontweight: "bold", 
      color: '#D11583',
      justifyContent: "center",
      alignItems: "center"
    }
}   
)