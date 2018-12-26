import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, StyleSheet   } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

export default class App extends React.Component {
  render() {
    
    let width = Dimensions.get('window').width; //full width
    let height = Dimensions.get('window').height; //full height
    let pic = {
      uri: 'http://bolpurkhabarwala.com/uploads/1543237091.jpg'
    };
    return (
      <ScrollView style={styles.container}>
        <View style={styles.contentView}>
          <View>
            <Swiper style={styles.wrapper} showsButtons={true}>
              <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
              </View>
              <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
              </View>
            </Swiper>
          </View>
          <View style={styles.headerContainer}>
            
            <TextTicker
              style={{ fontSize: 24 }}
              duration={16000}
              marqueeOnStart
              loop
              scroll
              marqueeDelay={1000}
              marqueeResetDelay={1000}> <Icon color="white" name="star" size={20} style={{ color: 'red' }} /> In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content. <Icon color="white" name="star" size={20} style={{ color: 'red' }} /></TextTicker>
          </View>
        </View>
      </ScrollView>
    );
    
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 1,
    backgroundColor: 'yellow'
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },

  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

// AppRegistry.registerComponent('AwesomeProject', () => Bananas);


