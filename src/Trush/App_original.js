
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar , SafeAreaView, Button, ToastAndroid} from 'react-native';
import BottomLoading from './src/BottomLoading';
import LogoLoading from './src/LogoLoading';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { width, height } = Dimensions.get('window');

function HomeScreen({ navigation }) {
  
  const [shouldShow, setShouldShow] = useState(true);
  React.useEffect(() => {
    var timer = setTimeout((timer) => {
      setShouldShow(!shouldShow);
      clearTimeout(timer);
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
          backgroundColor="#d15400"
          barStyle="light-content"
      />
      {shouldShow ? (
      <View style={styles.container}>
        <View style={{marginTop:'50%'}}>
            <LogoLoading/>
        </View>
        <View  style={styles.bottomView}>
            <BottomLoading/>
        </View>
      </View>
      ) : null}
      {!shouldShow ? (
        <View style={styles.container}>
          <View style={styles.secondView}>
          </View>
          <Button
            title="Home"
            onPress={() => navigation.navigate('AboutUs')}
          />
        </View>
      ) : null}
    </SafeAreaView>   
  );
}

function AboutUs({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

AboutUs.navigationOptions = ({ navigation }) => {

  let tabBarVisible = true;

  return {
      tabBarVisible,
  }
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarVisible: false}} />
      <Tab.Screen name="AboutUs" component={AboutUs} />
    </Tab.Navigator>
  );
}

function App() {
    ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT);
    return (
      <NavigationContainer>
          <MyTabs />
      </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f60',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: width/2 + 12,
    position: 'absolute', //Here is the trick
    bottom: -5, //Here is the trick
  },
  secondView: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,.8)',
    alignItems: 'center',
    bottom: 0,
    width:'100%',
    height:'80%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
});
