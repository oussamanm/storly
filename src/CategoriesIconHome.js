import React, { Component, useState, useEffect } from 'react';

import { StyleSheet,Text, View , ScrollView, Image} from 'react-native';

import api from './apis/apiPrd';

function trimName(name) {
    let nameRest = name.split(' ').join('').slice(8);
    if (nameRest.length > 0) {
      return name.split(' ').join('').slice(0, 8) + '...';
    }
    return name.split(' ').join('').slice(0, 8);
}

const CategoriesScroll = ({}) => {

    const [CatsData, setCats] = useState([]);

    useEffect(() => {
        getNewsFromAPI();
    }, [])
    
    function getNewsFromAPI() {
      api.get('categories')
      .then(function (response) {
            setCats(response.data);
      })
      .catch(function (error) {
          console.log(error)
      })
    }

    if (!CatsData) {
        return null
    }

    return (
        <View style={styles.catView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {CatsData.map((cat) => (
              <View style={styles.catHolder} key={cat.categories_id}>
                <View style={styles.catUserImage}>
                  <Image
                    style={{width:43,height:43,}}
                    source={{uri: cat.categories_icon}}
                  />
                </View>
                <Text style={styles.catUsernameText}>
                  {trimName(cat.categories_title)}
                </Text>
              </View>
            ))}
        </ScrollView>
      </View>
    );
};

export default CategoriesScroll;

const styles = StyleSheet.create({
    catHolder: {
      paddingHorizontal: 0,
      alignItems: 'center',
      paddingLeft:10,
      paddingRight:10,
    },
    catUserImage: {
      height: 60,
      width: 60,
      borderRadius: 100,
      backgroundColor: '#f60',
      alignItems:'center',
      justifyContent:'center'
    },
    catUsernameText: {
      marginTop: 4,
      fontSize:10,
      color:'#f60',
      fontWeight: '600'
    },
    catView: {
      paddingVertical: 4,
      marginTop: 8,
      marginBottom: -20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
})