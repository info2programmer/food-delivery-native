import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, StyleSheet, StatusBar, Platform } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import NavigationBar from 'react-native-navbar';
import { SearchBar, Divider, Card, Button, Rating  } from 'react-native-elements';

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


const titleConfig = {
  title: 'KHAABARWALA'
};

const width = Dimensions.get('window').width;
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyStatusBar backgroundColor="#CCCC00" barStyle="dark-content" />
        <NavigationBar
          style={{ backgroundColor: 'yellow' }}
          title={titleConfig}
        />
        <SearchBar
          placeholder='Search By Restaurent' />
        <ScrollView style={styles.container}>
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
                style={{ fontSize: 24, height: 48, marginTop: 2, padding: 5, }}
                duration={16000}
                marqueeOnStart
                loop
                scroll
                marqueeDelay={1000}
                marqueeResetDelay={1000}> <Icon color="white" name="star" size={20} style={{ color: 'red' }} /> Todays' Delivary Free With Khaabarwala App <Icon color="white" name="star" size={20} style={{ color: 'red' }} /></TextTicker>
            </View>
            <Divider style={{ backgroundColor: '#D3D3D3', marginTop: 2 }} />
            <Text style={{ color: '#8a8a5c', fontSize: 20, margin: 8 }}>List of restaurant</Text>
            <Card
              title='WOW MOMO'
              image={require('./images/banner1.jpg')}>
              <Rating
                showRating
                type="star"
                fractions={1}
                startingValue={3.6}
                imageSize={20}
                style={{ paddingVertical: 5 }}
              />
              <Text style={{ marginBottom: 10 }}>
                14 B, Anil Roy Rd, Hemanta Mukherjee Sarani, lake Terrace, Ballygunge, Kolkata, West Bengal 700029</Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
            </Card>
            <Card
              title='PIZZA NATION'
              image={require('./images/banner2.jpg')}>
              <Rating
                showRating
                type="star"
                fractions={1}
                startingValue={4.6}
                imageSize={20}
                style={{ paddingVertical: 5 }}
              />
              <Text style={{ marginBottom: 10 }}>14 B, Anil Roy Rd, Hemanta Mukherjee Sarani, lake Terrace, Ballygunge, Kolkata, West Bengal 700029</Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
            </Card>
            <Card
              title='Ebala Obala'
              image={require('./images/banner3.jpg')}>
              <Rating
                showRating
                type="star"
                fractions={1}
                startingValue={4.2}
                imageSize={20}
                style={{ paddingVertical: 5 }}
              />
              <Text style={{ marginBottom: 10 }}>14 B, Anil Roy Rd, Hemanta Mukherjee Sarani, lake Terrace, Ballygunge, Kolkata, West Bengal 700029</Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
            </Card>
            <Divider style={{ backgroundColor: '#D3D3D3', marginTop: 5 }} />
          </View>
        </ScrollView>
      </View>

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
    width: width,
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
    width: width,
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


