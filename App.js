import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, StyleSheet, StatusBar, Platform } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';


const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const width = Dimensions.get('window').width;
export default class App extends React.Component {
  render() {
    return (
      
      <ScrollView style={styles.container}>
        <MyStatusBar backgroundColor="#fdff06" barStyle="dark-content" />
        <View style={styles.contentView}>
          <View>
            <View style={styles.container}>
              <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay>
                <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
                  <Image resizeMode='stretch' style={styles.image} source={require('./images/banner1.jpg')} />
                </View>
                <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
                  <Image resizeMode='stretch' style={styles.image} source={require('./images/banner3.jpg')} />
                </View>
                <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
                  <Image resizeMode='stretch' style={styles.image} source={require('./images/banner2.jpg')} />
                </View>
              </Swiper>
            </View>
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
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
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
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width : width,
    flex: 1
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'white',
    fontSize: 20
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
});

// AppRegistry.registerComponent('AwesomeProject', () => Bananas);


