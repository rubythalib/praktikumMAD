import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';

 class App extends React.Component {
  render() {
    return (
      // <View >
      //   <Text>Hello {this.props.name}</Text>
      //
      // </View>
    );
  }
}
export default class LotsOfGreeting extends React.Component{
  render() {
    let pic={
      uri:'https://i.ebayimg.com/images/g/Yn8AAOSw4UtWSv5Q/s-l300.jpg'
    }
    return (
      <View style={styles.container}>
      <App name='John'/>
      <App name='Hjon'/>
      <App name="lho kok"/>
        <Image source={pic} style={{width: 193, height: 110}}/>
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
