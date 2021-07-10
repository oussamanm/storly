
import React, { useState } from 'react';
import { StyleSheet, Text, View , Dimensions,StatusBar, SafeAreaView, Image, ScrollView,ToastAndroid} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator} from '@react-navigation/drawer';

import ProductScreen from './src/ScreenProductDetail'
import CartScreen from './src/ScreenCart'


const { width, height } = Dimensions.get('window');

/// Splash
import BottomLoading from './src/Splash/BottomLoading';
import LogoLoading from './src/Splash/LogoLoading';
/// Menu
import CustomSidebarMenu from './src/CustomSidebarManu';
/// Pages & Screen
import PageHome from './src/PageHome';

export const Splash = () => (
  <View style={styles.container}>
    <View style={{marginTop:'50%'}}>
        <LogoLoading/>
    </View>
    <View  style={styles.bottomView}>
        <BottomLoading/>
    </View>
  </View>
);



function ScreenCategories({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
          backgroundColor="#d15400"
          barStyle="light-content"
      />
      <View>
        <Text>Hello in Cat</Text>
      </View>
    </SafeAreaView>   
  );
}
function ScreenWishes({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
          backgroundColor="#d15400"
          barStyle="light-content"
      />
      <View>
        <Text>Hello in Wishes</Text>
      </View>
    </SafeAreaView>   
  );
}
function ScreenProfile({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
          backgroundColor="#d15400"
          barStyle="light-content"
      />
      <View>
        <Text>Hello in Profile</Text>
      </View>
    </SafeAreaView>   
  );
}
function PageLogin({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
          backgroundColor="#d15400"
          barStyle="light-content"
      />
      <View>
        <Text>Hello in Login</Text>
      </View>
    </SafeAreaView>   
  );
}
function PageAboutus({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
          backgroundColor="#d15400"
          barStyle="light-content"
      />
      <View>
        <Text>Hello in Aboutus</Text>
      </View>
    </SafeAreaView>   
  );
}

/*
const tabConfig = {
  labelStyle: {
      fontWeight: 'bold'
  }
  // and other props...
} as const; //<--- this `as const` operator does the trick
*/

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

///// Side Menu Bar
function DrawerRoutes() {
  return (
      <Drawer.Navigator initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>

        <Drawer.Screen name="Home" component={PageHome} initialParams={{ navigation :Drawer.navigation}} options={{ navigation :Drawer.navigation }}/>
        <Drawer.Screen name="Login" component={PageLogin} />
        <Drawer.Screen name="Aboutus" component={PageAboutus} />
      </Drawer.Navigator>
  );
}

///// Bottom Menu
function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        style: {
          height: 60,
          paddingBottom: 5,
        },
        activeTintColor: '#ff6600',
        inactiveTintColor: '#607d8b',
      }}>
        <Tab.Screen name="Home" component={DrawerRoutes} 
          options={{
            title: 'Home',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 30, height: 30 }}
                  source={
                    focused
                      ? require('./src/imgs/ic_home.png')
                      : require('./src/imgs/ic_home_inactive.png')
                  }
                />
              );
            },}}
        />
        <Tab.Screen name="Categories" component={ProductScreen} 
          options={{
            title: 'Categories',
            tabBarVisible: 'false',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 30, height: 30 }}
                  source={
                    focused
                      ? require('./src/imgs/ic_categories.png')
                      : require('./src/imgs/ic_categories_inactive.png')
                  }
                />
              );
            },}}
        />
        <Tab.Screen name="Wishes" component={ScreenWishes} 
          options={{
            title: 'Wishes',
            tabBarVisible: 'false',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 30, height: 30 }}
                  source={
                    focused
                      ? require('./src/imgs/ic_wish.png')
                      : require('./src/imgs/ic_wish_inactive.png')
                  }
                />
              );
            },}}
        />
        <Tab.Screen name="Cart" component={CartScreen} 
          options={{
            title: 'Cart',
            tabBarVisible: 'false',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 30, height: 30 }}
                  source={
                    focused
                      ? require('./src/imgs/ic_cart.png')
                      : require('./src/imgs/ic_cart_inactive.png')
                  }
                />
              );
            },}}
        />
        <Tab.Screen name="Profile" component={ScreenProfile} 
          options={{
            title: 'Profile',
            tabBarVisible: 'false',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: 30, height: 30 }}
                  source={
                    focused
                      ? require('./src/imgs/ic_profile.png')
                      : require('./src/imgs/ic_profile_inactive.png')
                  }
                />
              );
            },}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function App() {
    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
      setTimeout((timer) => {
        setIsLoading(false);
        //clearTimeout(timer);
      }, 500);

    }, []);

    if (isLoading){
      return <Splash/>
    }
    return <MyTabs/>
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
});
