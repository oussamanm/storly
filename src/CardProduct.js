import React, { Component, useState } from 'react';
import { StyleSheet,Text, View , SafeAreaView, Image, Dimensions, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');


const ItemPrd = ({ item, onPress}) => {
    return(
        <View style={styles.itemPrd}>
            <Image style={styles.itemImage} source={{uri :item.products_image}}/>
            <Text numberOfLines={1} style={styles.itemTitle}>{item.products_title}</Text>
            <Text style={{fontSize: 15, fontWeight: "bold", marginLeft: 5,marginBottom : 5,}}>{item.products_price}</Text>

            <Text style={styles.itemTitle}>
                {item.products_reviews > 0?
                    <Text>{item.products_reviews} <FontAwesome5 name={'star'} solid color="rgba(0,0,0,0.5)" /></Text>
                : null}
            </Text>
            <View style={{position:'absolute',bottom:5,right:5,backgroundColor:'#F2F2F2',borderRadius:30,width:35,height:35,alignItems:'center',justifyContent:'center',}}><Image source={require('./imgs/add-to-carte.png')} style={{width:23,height:23,}}/></View>
            <View style={{position:'absolute',top:5,right:5,backgroundColor:'#fff',borderRadius:30,width:30,height:30,alignItems:'center',justifyContent:'center',}}><Image source={require('./imgs/fav.png')} style={{width:20,height:20,}}/></View>
        </View>
    );
};

export default ItemPrd;

const styles = StyleSheet.create({

itemPrd: {
    marginRight: 5,
    marginLeft: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    width: (width / 2) - 20,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 14,
    },
    itemTitle: {
    fontSize: 13,
    color: "#6E6E6E",
    marginBottom : 5,
    marginLeft: 5,
    },
    itemImage:{
    width: (width / 2) - 20,
    height: (width / 2) - 20,
    resizeMode : 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderTopLeftRadius : 5,
    borderTopRightRadius: 5,
    }
});