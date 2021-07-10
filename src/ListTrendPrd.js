import React, { Component, useState, useEffect } from 'react';
import { StyleSheet,Text, View , SafeAreaView, Image, Dimensions, TouchableOpacity, FlatList} from 'react-native';

import ItemPrd from './CardProduct';
import apiPrd from './apis/apiPrd';

const ListTrendPrd = ({}) => {

    const [Prds, setPrds] = useState([]);

    useEffect(() => {
        getNewsFromAPI();
    }, [])
    
    function getNewsFromAPI() {
      apiPrd.get('trend')
      .then(function (response) {
          setPrds(response.data);
      })
      .catch(function (error) {
          console.log(error)
      })
    }

    if (!Prds) {
        return null
    }

    /// render Data in FlatList
    const renderItem = ({item}) => {
        return (
            <ItemPrd item={item}/>
        );
    };
    
    return (
        <View>
            <Text style={{fontWeight:'bold', fontSize:15,marginLeft:20, color:'#f60', marginTop:7, marginBottom:7}}>Trend</Text>
            <SafeAreaView style={{flex: 1}}>
            <FlatList
                contentContainerStyle={{flex: 1, justifyContent: 'center',alignItems: 'center'}}
                data={Prds}
                renderItem={renderItem}
                keyExtractor={(item) => item.products_id}
                numColumns={2}
                />
            </SafeAreaView>
        </View>
    );
};

export default ListTrendPrd;