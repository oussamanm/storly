import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';

import BottomLoading from './app/Components/Svg/BottomLoading';
import LogoLoading from './app/Components/Svg/LogoLoading';

const {width, height} = Dimensions.get('screen');

import { AuthContext } from './Context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});
  
const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);
  
export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Master List Screen</Text>
    <Button
      title="MAZAD"
      onPress={() =>
        navigation.push("Explore", { name: "MAZAD" })
      }
    />
    <Button
      title="Mazad Morocco Online Shop"
      onPress={() =>
        navigation.push("Explore", { name: "Mazad Morocco Online Shop" })
      }
    />
    <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
  </ScreenContainer>
);

export const Explore = ({ route }) => (
  <ScreenContainer>
    <Text>Explore Screen</Text>
    {/* {route.params.name && <Text>{route.params.name}</Text>} */}
  </ScreenContainer>
);

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Favorite" onPress={() => navigation.push("Favorite")} />
    <Button
      title="Mazad Morocco Online Shop"
      onPress={() => {
        navigation.navigate("Home", {
          screen: "Explore",
          params: { name: "Mazad Morocco Online Shop" }
        });
      }}
    />
  </ScreenContainer>
);
  
export const Favorite = () => (
  <ScreenContainer>
    <Text>Favorite Screen</Text>
  </ScreenContainer>
);
  
export const Profile = ({ navigation }) => {
  // const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      {/* <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => signOut()} /> */}
    </ScreenContainer>
  );
};
  
export const Splash = () => (

  <View
    style={{
      flex: 1,
      backgroundColor: '#f08149',
      alignItems: 'center',
      overflowX: 'hidden',
    }}
  >
    <View
      style={{
        height: height - width / 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
    <LogoLoading
      scrollEnabled={false}
    showsHorizontalScrollIndicator={false}
      style={{
        // width: width / 2,
        // height: ( width / 2 ) * 1.136,
      }}
    />
    </View>
    <BottomLoading
      style={{
        // width: width,
        // height: width,
      }}
    />
  </View>

);

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};
  
export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);
  
  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};