import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import { SliderBox } from "react-native-image-slider-box";

import Constants from 'expo-constants';

import ItemPrd from './CardProduct';
import { Feather as Icon, FontAwesome as FAIcon } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Item } from 'native-base';
import { useFonts } from 'expo-font';

//import MontserratRegular from '../../assets/fonts/Montserrat/MontserratRegular.ttf';
//import MontserratBold from '../../assets/fonts/Montserrat/MontserratBold.ttf';
//import MontserratExtraBold from '../../assets/fonts/Montserrat/MontserratExtraBold.ttf';

export default function ProductScreen() {
    /*
  const [loaded] = useFonts({
    MontserratRegular,
    MontserratBold,
    MontserratExtraBold,
  });*/
  
  const [Prdimages] = useState([
    "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  ]);

  const [isFavourite, setFavourite] = useState(false);

  const scrollSizeRef = useRef("ScrollsizeRef");
  const scrollColorRef = useRef("ScrollColorRef"); 
  const scrollOptionRef = useRef(); 


  const [size] = useState([
    { id: 1, label: 'S' },
    { id: 2, label: 'M' },
    { id: 3, label: 'L' },
    { id: 4, label: 'XL' },
    { id: 5, label: 'XXL' },
    { id: 6, label: 'XXXL' },
    { id: 7, label: 'xxxll' },
    { id: 8, label: 'XXLlll' },
    { id: 9, label: 'XXXLllll' },
  ]);

  const [colorData] = useState([
    { id: 1, color: {r: 255,g: 0,b:0} },
    { id: 2, color: {r: 255,g: 255,b:0} },
    { id: 3, color: {r: 255,g: 0,b:255} },
    { id: 4, color: {r: 123,g: 128,b:129} },
    { id: 5, color: {r: 255,g: 0,b:0} },
    { id: 6, color: {r: 255,g: 0,b:0} }
  ]);

  const [optionsData] = useState([
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    { id: 4, label: 'Option 4' },
    { id: 5, label: 'Option 5' },
    { id: 6, label: 'Option 6' },
  ]);

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(1);
  const [selectedOption, setSelectedOption] = useState(1);

  const [productDescription] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ornare urna. Duis egestas ligula quam, ut tincidunt ipsum blandit at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae justo congue, tempor urna vitae, placerat elit. Nulla nec consectetur dolor, in convallis erat. Fusce hendrerit id sem tristique congue. \n\nVestibulum mauris sapien, vulputate in lacus in, lacinia efficitur magna. Sed id massa ut magna eleifend lacinia et id tellus. Sed dignissim mollis lacus. Etiam laoreet ex eu sem euismod congue. In maximus porttitor imperdiet. Nulla eu dolor vehicula ligula mollis tristique ut in enim. Phasellus quis tempor velit. Vivamus sit amet orci ornare, pulvinar purus et, commodo magna. Nunc eu tortor vitae leo varius vehicula quis volutpat dolor.\n\nDonec interdum rutrum tellus, et rhoncus risus dignissim at. Aliquam sed imperdiet tortor, non aliquam sapien. Cras quis enim a elit fringilla vehicula. Aenean pulvinar ipsum a magna feugiat, a fermentum ante pellentesque. Mauris tincidunt placerat placerat. Quisque tincidunt enim sed metus fermentum maximus. Fusce eu tempus est.`
  );

  const [seeFullDescription, setSeeFullDescription] = useState(false);

  const [moreProducts] = useState([
    {
      id : '1',
      products_title: 'Black Printed Tshirt',
      products_price: 19.49,
      products_image:
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
      products_reviews: 5,
    },
    {
      id : '2',
      products_title: 'Black Printed Top (Women)',
      products_price: 19.49,
      products_image:
        'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=90',
      products_reviews: 5,
    },
    {
      id : '3',
      products_title: 'White Solid Tshirt',
      products_price: 34.99,
      products_image:
        'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
        products_reviews: 5,
      },
    {
      id : '4',
      products_title: 'Black Solid Tshirt',
      products_price: 34.99,
      products_image:
        'https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
        products_reviews: 5,
      },
    {
      id : '5',
      products_title: 'Red Top (Women)',
      products_price: 44.85,
      products_image:
        'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
        products_reviews: 5,
      },
  ]);

  const [scrollY, setscrollY] = useState(new Animated.Value(0));

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('#fff');
  }, []);

  let menuOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  let iconMenuOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  // if (!loaded) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }
  function getColor(color, opacity){
    return 'rgba('+color.r+', '+color.g+', '+color.b+', '+opacity+')';
  }

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Animated.View style={{
            height: 50,
            backgroundColor: 'white',
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width:'100%',
            position: 'absolute',
            zIndex: 1,
            opacity: menuOpacity,
          }}>
            <Icon color='#f60' name='arrow-left' size={30} />
            <Icon style={{right: 0}} name='shopping-bag' size={26} color='#f60' />
            <Icon style={{right: 0}} name='shopping-bag' size={26} color='#f60' />
        </Animated.View>
        <Animated.View style={{
            height: 50,
            paddingHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width:'100%',
            position: 'absolute',
            zIndex: 1,
            opacity: iconMenuOpacity,
          }}>
            <Icon color='#f60' name='arrow-left' size={30} />
            <Icon style={{right: 0}} name='shopping-bag' size={26} color='#f60' />
            <Icon style={{right: 0}} name='shopping-bag' size={26} color='#f60' />
        </Animated.View>
      </View>


      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: false}
          )
        }>
        <SliderBox 
            autoplay 
            sliderBoxHeight={500}
            ImageComponentStyle={{borderRadius: 25,borderTopLeftRadius : 0,borderTopRightRadius: 0, width: '100%'}} 
            images={Prdimages}
            inactiveDotColor="#fff"
            dotColor="#f60"
            underlayColor="rgba(255,255,255,0)"
            activeOpacity={0}
            dotStyle={{
              width: 10,
              height: 10,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              borderRadius: 100,
            }}
        />

        <View style={styles.detailsView}>
          
          <View style={{flexDirection: 'row'}}>
                <View style={{flex: 3}}>
                  <Text numberOfLines={2} style={styles.productTitle}>HEllo Titlte, product for men , yello black</Text>
                  <Text>Brand : Zara</Text>
                </View>
                <Text style={styles.PriceText}>$400.00</Text>
          </View>

          {/* Option Size */}
          <View style={{ marginTop: 20, flexDirection: 'row' }}>
            <View style={{flex: 2, justifyContent:'center'}}>
              <Text style={{ fontSize: 18}}>Size  :</Text>
            </View>
            
            <View style={{flex: 7}}>
              <ScrollView ref={scrollSizeRef} horizontal={true} showsHorizontalScrollIndicator={false}>
                {size.map((s) => (
                  <TouchableOpacity
                    key={s.id}
                    style={selectedSize === s.label ? styles.tagSelected : styles.tag}
                    onPress={() => setSelectedSize(s.label)}>
                    <Text
                      style={selectedSize === s.label ? styles.tagLabelSelected : styles.tagLabel}>
                      H1
                      {/* {size.label} */}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <TouchableOpacity 
              style={{flex:1, alignItems: 'center', justifyContent:'center'}}
              onPress={() => scrollSizeRef.current.scrollTo({x: 100, y: 0, animated: true})}>
                <Icon name='chevron-right' size={20} style={{}} />
            </TouchableOpacity>

          </View>

          {/* Option Color */}
          <View style={{ marginTop: 20, flexDirection: 'row' }}>
            <View style={{flex: 2, justifyContent:'center'}}>
              <Text style={{ fontSize: 18}}>Color  :</Text>
            </View>
            
            <View style={{flex: 7}}>
              <ScrollView ref={scrollColorRef} horizontal={true} showsHorizontalScrollIndicator={false}>
                {colorData.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={{ marginRight: 10,marginTop:5}}
                    onPress={() => setSelectedColor(item.id)}>
                    <View style={{width: 35, height: 35, borderColor: getColor(item.color, .4), borderWidth: 4,borderRadius: 100, backgroundColor: getColor(item.color, 1)}}>

                    </View>
                    {selectedColor === item.id ? 
                      <Image source={require('./imgs/ic_checked.png')} style={{width:20,height:20,position:'absolute',right:-5,top:-5}}></Image>
                    : null}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            
            <TouchableOpacity 
              style={{flex:1, alignItems: 'center', justifyContent:'center'}}
              onPress={() => scrollColorRef.current.scrollTo({x: 100, y: 0, animated: true})}>
                <Icon name='chevron-right' size={20} style={{}} />
            </TouchableOpacity>
          </View>

          {/* Option box */}
          <View style={{ marginTop: 20, flexDirection: 'row' }}>
            <View style={{flex: 2, justifyContent:'center'}}>
              <Text style={{ fontSize: 18}}>Options:</Text>
            </View>
            
            <View style={{flex: 7}}>
              <ScrollView ref={scrollOptionRef} horizontal={true} showsHorizontalScrollIndicator={false}>
                {optionsData.map((s) => (
                  <TouchableOpacity
                    key={s.id}
                    style={selectedOption === s.label ? styles.tagOptionSelected : styles.tagOption}
                    onPress={() => setSelectedOption(s.label)}>
                    <Text
                      style={selectedOption === s.label ? styles.tagLabelSelected : styles.tagLabel}>
                      {s.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            
            <TouchableOpacity 
              style={{flex:1, alignItems: 'center', justifyContent:'center'}}
              onPress={() => scrollOptionRef.current.scrollTo({x: 50, y: 0, animated: true})}>
                <Icon name='chevron-right' size={20} style={{}} />
            </TouchableOpacity>
          </View>

        </View>

        {/* Buttons Add to carte / Buy now */}
        {/* <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={[styles.buttonText, { color: '#111' }]}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View> */}

        {/* Descritpion */}
        <View style={{ marginTop: 10, backgroundColor: '#fff' }}>
          <TouchableOpacity
            style={styles.productDescriptionHeader}
            onPress={() => setSeeFullDescription((prev) => !prev)}
          >
            <Text style={{fontSize: 18 }}>
              Product Description
            </Text>
            <TouchableOpacity
              onPress={() => setSeeFullDescription((prev) => !prev)}
            >
              {seeFullDescription ? (
                <Icon name='chevron-up' size={26} />
              ) : (
                <Icon name='chevron-down' size={26} />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={{ padding: 10 }}>
            <Text>
              {seeFullDescription
                ? `${productDescription}`
                : `${productDescription.split('\n')[0]}`}
            </Text>
          </View>
        </View>

        {/* More Products */}
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 20, marginHorizontal: 10,}}>
            More Products
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
              {moreProducts.map((item) => (
                  <ItemPrd item={item} />
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={{ height: 40 }}></View>
      </Animated.ScrollView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'rgba(255, 255,255, 0)',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position:'absolute',
    width:'100%',
  },
  headerTitle: {
    fontSize: 18,
    color: 'red',
    //fontFamily: 'MontserratBold',
  },
  detailsView: {
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  productTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 24,
    //fontFamily: 'MontserratExtraBold',
  },
  productPriceView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  PriceText: {
    fontSize: 20,
    flex: 1,
    paddingTop: 5,
    marginLeft: 20,
  },

  actualPriceText: {
    color: '#222',
    marginLeft: 10,
    textDecorationLine: 'line-through',
    fontSize: 18,
    //fontFamily: 'MontserratRegular',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#111',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  addToCartButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
    borderWidth: 1,
    borderColor: '#111',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    //fontFamily: 'MontserratBold',
  },

  tag: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: '#fff',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#707070',
  },
  tagLabel: {
    color: '#707070',
    textAlign: 'center',
  },
  tagSelected: {
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: '#fff',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagLabelSelected: {
    color: '#f60',
    fontWeight: 'bold',
  },

  tagColor:{
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  tagColorSelected: {
    position:'absolute',
    right: 0,
  },

  tagOption: {
    borderRadius: 10,
    backgroundColor: '#fff',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#707070',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 8,
    paddingBottom:8,
  },
  tagOptionSelected: {
    borderRadius: 10,
    backgroundColor: '#fff',
    marginRight: 10,
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 8,
    paddingBottom:8,
  },

  productDescriptionHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4fe',
  },
  moreProductImageView: {
    flex: 1,
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
  },
  moreProductName: {
    //fontFamily: 'MontserratBold',
    fontSize: 16,
  },
  moreProductPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  moreProductPrice: {
    fontSize: 16,
    //fontFamily: 'MontserratRegular',
  },
  moreProductIcon: {
    marginLeft: 10,
  },
  moreProductBuyButton: {
    backgroundColor: '#111',
    marginTop: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreProductBuyButtonText: {
    color: '#fff',
    //fontFamily: 'MontserratBold',
    fontSize: 18,
  },
});