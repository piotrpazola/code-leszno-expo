import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView, Location, Permissions } from 'expo';

export default class App extends React.Component {
  state = {
    location: null
  }

 async componentDidMount() {
   const {coords} = await this.getLocationAsync();
   const location = {
      longitude: coords.longitude,
      latitude: coords.latitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05
   }
   this.setState({ location });
 }

  async getLocationAsync() {
    const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      alert(status);
      return Location.getCurrentPositionAsync({enableHighAccuracy: true});
    } else {
      throw new Error('Location permission not granted');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Code Leszno Tech Talk #1: GPS na mapie</Text>
          {!this.state.location &&
            <Text style={styles.waiting}>Szukam pozycji GPS...</Text>
          }
          {this.state.location &&
            <MapView
              style={{ flex: 1, width: 400, height: 400 }}
              initialRegion={this.state.location}
            >
              <MapView.Marker coordinate={this.state.location} />
            </MapView>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    paddingTop: 10
  },
});
