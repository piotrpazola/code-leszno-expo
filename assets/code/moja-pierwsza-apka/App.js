import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class App extends React.Component {
  state = {
   hasCameraPermission: null,
 }

 async componentDidMount() {
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeScanned = ({ type, data }) => {
    alert(`Kod kreskowy typu ${type} zawierający dane ${data} został zeskanowany!`);
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{flex:1}}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={{flex: 1}}
        >
        <Text style={{fontSize: 30, color: '#FFF', padding: 20}}>
          Code Leszno Tech Talk #1: Skaner kodów kreskowych
        </Text>
      </BarCodeScanner>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
