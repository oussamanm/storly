// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {SafeAreaView, StyleSheet, Image, Text, Linking} from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem,} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  
  const BASE_PATH = './imgs/logo.png';

  return (
    <SafeAreaView style={{ flex: 1}}>
      <Image
        source={{ uri: BASE_PATH}}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
        www.Storly.ma
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    backgroundColor: 'red',
  },
});

export default CustomSidebarMenu;
