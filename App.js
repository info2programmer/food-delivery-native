import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, StyleSheet, StatusBar, Platform } from 'react-native';
import TextTicker from 'react-native-text-ticker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import { SearchBar, Divider, Card, Button, Rating  } from 'react-native-elements';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";
// import {Icon} from 'react-native-vector-icons';


const width = Dimensions.get('window').width;
class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
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
                title='VIEW NOW' onPress={()=>this.props.navigation.navigate('Details',{
                  itemId: 86,
                  otherParam: 'WOW MOMO',
                })} />
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
                title='VIEW NOW' onPress={()=>this.props.navigation.navigate('Details',{
                  itemId: 87,
                  otherParam: 'PIZZA NATION',
                })} />
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
                title='VIEW NOW' onPress={()=>this.props.navigation.navigate('Details',{
                  itemId: 87,
                  otherParam: 'Ebala Obala',
                })} />
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


// This Is Test Components
class DetailsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    
    return (
      <View style={{ flex: 1 }}>
          <Text>Hello There</Text>
      </View>

    );

  }

}

// This Is Test Components
class CartScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Text>Cart Screen</Text>
      </View>

    );

  }

}

// This Is Test Components
class AccountScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Text>Account Screen</Text>
      </View>

    );

  }

}

const TabNavigator = createBottomTabNavigator({
  Khabarwala: {screen: App,
    navigationOptions:{
      tabBarLable: 'Home',
      tabBarIcon : ({tintColor})=>(
        <Icon name="home" color={tintColor} size={24} />
      )
    }
  },
  Cart: {screen : CartScreen,
    navigationOptions:{
      tabBarLable: 'Cart',
      tabBarIcon : ({tintColor})=>(
        <Icon name="shopping-cart" color={tintColor} size={24} />
      )
    }
  },
  Account: {screen :AccountScreen,
    navigationOptions:{
      tabBarLable: 'Account',
      tabBarIcon : ({tintColor})=>(
        <Icon name="user" color={tintColor} size={24} />
      )
    }
  },
},{
  navigationOptions:({navigation})=>{
    const { routeName } = navigation.state.routes[navigation.state.index];
    return{
      headerTitle :routeName,
      headerStyle: {
        backgroundColor: 'yellow',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  tabBarOptions:{
    activeTintColor : '#e09200',
    inactiveTintColor : 'gray'
  }
});

const RootStack = createStackNavigator(
  {
    Khabarwala: TabNavigator,
    Details: DetailsScreen,
  },
  {
    defaultNavigationOptions:({navigation})=>{
      return{
        headerStyle: {
          backgroundColor: 'yellow',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Khabarwala extends React.Component {
 
  render() {
    return (
      <View style={{flex:1}}>
        <AppContainer />
      </View>
    );
  }
}