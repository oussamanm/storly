import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import { Feather as Icon, FontAwesome as FAIcon } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export default function CartScreen() {

  const DataPrds = [
    {id :1 , title: 'oussama', price: 10.50},
    {id :2 , title: 'oussama', price: 10.50},
    {id :3 , title: 'oussama', price: 10.50},
    {id :4 , title: 'oussama', price: 10.50},
    {id :5 , title: 'oussama', price: 10.50},
  ]

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('#fff');
  }, []);

  // if (!loaded) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }
  const [isSelected, setSelection] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    
    <View style={{ flex: 1 }}>
      <Animated.View style={styles.header}>
          <Icon color='#f60' name='arrow-left' size={30} />
          <Text style={{fontWeight: 'bold', fontSize: 20, color:'#434343'}}>Shopping Cart</Text>
          <Icon style={{right: 0}} name='shopping-bag' size={26} color='#f60' />
      </Animated.View>

      <ScrollView showsHorizontalScrollIndicator={false}
        style={{}}
      >
        <View style={{marginLeft: 20, marginBottom: 20, marginTop: 20}}>
          <Text style={{color: '#707070', fontWeight: 'bold', fontSize: 25}}>Your Items</Text>
          <Text style={{color: '#707070'}}>you have (2) items on your Cart</Text>
        </View>

        {DataPrds.map((item) =>(
            <View key={item.id} style={styles.itemPrd}>
              <View style={styles.cardItemImage}>
                <CheckBox
                  tintColors={{ true: 'green' ,  false: 'grey' }}
                  value={agree}
                  onChange={() => setAgree(!agree)}
                  checkboxStyle={{height:55,height:55}}
                  style={{zIndex: 1, position: 'relative' , top: 55, left: -15}}
                />
                <Image
                    style={{width:'100%',height:'100%',borderRadius: 12,}}
                    source={{
                    }}
                />

              </View>
              <View style={{marginTop:7}}>
                <View>
                  <Text style={{fontSize: 15,paddingLeft:5, width: width - 110-35, color:'rgba(0,0,0,0.6)'}} numberOfLines={2}>This is a title bla bla bla bla bla bla bla bla bla bla bla bla, for men and womenww</Text>
                </View>

                <View style={{flexDirection: 'row', width: width - 110-40,paddingLeft:5,paddingTop:20,}}>

                  <View style={{flex : 1,flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity style={{backgroundColor:'#eee', width:22, height:22,justifyContent:'center',borderRadius:7}}>
                      <Icon name='minus' size={17} style={{paddingLeft:2.9, color:'#707070'}}/>
                    </TouchableOpacity>
                    <Text
                      style={{height: 30, textAlign: 'center',textAlignVertical:'center',marginLeft:12,marginRight:12}}
                    >1</Text>
                    <TouchableOpacity style={{backgroundColor:'#fff', width:22, height:22,justifyContent:'center',borderRadius:7,shadowColor: "rgba(0,0,0,0.5)",shadowOffset: {width: 0,height: 0,},shadowOpacity: 0.25,shadowRadius: 7,elevation: 5,}}>
                      <Icon name='plus' size={17} style={{paddingLeft:2.9, color:'#707070'}} />
                    </TouchableOpacity>
                  </View>

                  <View style={{flex : 1, justifyContent: 'center',alignItems:'flex-end'}}>
                    <Text style={{fontWeight: '700', fontSize: 15}}>100.40$</Text>
                  </View>
                </View>
 
              </View>
              
            </View>
        ))}

      </ScrollView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:'100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  itemPrd: {
    backgroundColor: 'white',
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 15,
    flexDirection: 'row',
  },

  cardItemImage: {
    justifyContent:'center',
    width: 110,
    height: 110,
    backgroundColor: 'yellow',
    borderRadius: 15,
    margin: 5,
  },
});