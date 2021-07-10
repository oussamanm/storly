import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, StatusBar,Text, View , SafeAreaView,TouchableHighlight, Image, ScrollView} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Animated from 'react-native-reanimated';

import ListTrendPrd from './ListTrendPrd';
import CategoriesScroll from './CategoriesIconHome'

function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}

function FlashDeals(props){

  var diff,day, hrss,minn,sedd = 0;

  const [dealsDate, setDealsDate] = useState({d:12,h:15,m:18,s:12,t:10});
    setTimeout(() => {
      diff = new Date().getTime();
      diff = props.date - diff;
      diff = ~~(diff/1000);
      day = diff/86400;
      day = ~~day;
      diff = diff - day * 86400;
      hrss = diff/3600;
      hrss = ~~hrss;
      diff = diff - hrss * 3600;
      minn = diff/60;
      minn = ~~minn;
      diff = diff - minn * 60;
      sedd = diff;
      setDealsDate({d:day,h:hrss,m:minn,s:sedd,t:1000});
    }, dealsDate.t);

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.cardPrdHeader}>
        <View style={{flex:2, alignItems:'flex-start'}} >
          <Image style={{flex:2,resizeMode: 'contain', height:35, width:35*5.15,marginLeft:10}} source={require('./imgs/Flashdeals.png')}></Image>
        </View>
          
          <View  style={{flex:1, alignItems: 'flex-end',justifyContent: 'center'}}>
            <View  style={{flexDirection:'row',paddingRight:10}}> 
              <Text style={{backgroundColor:'black', color:'white', paddingLeft:4, paddingRight:4, paddingTop:2, paddingBottom:2,borderRadius:7,marginLeft:3,marginRight:3,}}>{pad(dealsDate.d)}</Text>
              <Text>:</Text>
              <Text style={{backgroundColor:'black', color:'white', paddingLeft:4, paddingRight:4, paddingTop:2, paddingBottom:2,borderRadius:7,marginLeft:3,marginRight:3,}}>{pad(dealsDate.h)}</Text>
              <Text>:</Text>
              <Text style={{backgroundColor:'black', color:'white', paddingLeft:4, paddingRight:4, paddingTop:2, paddingBottom:2,borderRadius:7,marginLeft:3,marginRight:3,}}>{pad(dealsDate.m)}</Text><Text>:</Text>
              <Text style={{backgroundColor:'black', color:'white', paddingLeft:4, paddingRight:4, paddingTop:2, paddingBottom:2,borderRadius:7,marginLeft:3,marginRight:3,}}>{pad(dealsDate.s)}</Text>
            </View>
            
          </View>
      </View>
      <View style={styles.cardPrdView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {props.deals.map((deal, index) => (
              <View style={styles.cardPrdHolder} key={index.toString()}>
                <View style={styles.cardPrdImage}>
                  <Image
                    style={{width:'100%',height:'100%',borderRadius: 12,}}
                    source={{
                      uri: deal.img,
                    }}
                  />
                  <View style={{position:'absolute',borderTopLeftRadius:12,borderBottomRightRadius:12,top:0,left:0,backgroundColor:'#f60',paddingLeft:10,paddingRight:10,paddingTop:0,paddingBottom:2,}}>
                    <Text style={{color:'white',fontSize:16,}}>-{deal.discount}%</Text>
                  </View>
                </View>
                <Text style={styles.cardPrdText}>${deal.price}</Text>
                <View style={{flexDirection:'row'}}><Text style={styles.cardPrdReview}>{deal.reviews}</Text><FontAwesome5 name={'star'} solid color="rgba(0,0,0,0.67)" /></View>
              </View>
            ))}
        </ScrollView>
      </View>  
    </View>
  );
};

export default class PageHome extends Component {
    constructor(props) {
      super(props);
      this.state = {
        images: [
          "https://source.unsplash.com/1024x768/?nature",
          "https://source.unsplash.com/1024x768/?water",
          "https://source.unsplash.com/1024x768/?girl",
          "https://source.unsplash.com/1024x768/?tree",
        ],
        Deals: 
        [
          {
            discount: '70',
            img: 'https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/05/82/ad8eca9e-f6ec-4ebf-9b09-4f8332839fb9.jpg.webp',
            price: '18.43',
            reviews: '4.4',
          },
          {
            discount: '50',
            img: 'https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/9F/21/75759de7-5b72-4bf4-8eea-73f181efc12e.jpg',
            price: '18.43',
            reviews: '4.3',
          },
          {
            discount: '60',
            img: 'https://imgaz2.staticbg.com/thumb/grid/oaupload/banggood/images/5A/4D/1ce6c959-0963-4aa5-b558-fad6d5d0f7be.jpg.webp',
            price: '18.43',
            reviews: '4.4',
          },
          {
            discount: '90',
            img: 'https://imgaz3.staticbg.com/thumb/grid/oaupload/banggood/images/32/B6/a785d931-b32a-4a06-95a2-aaaa490fbc2e.jpg.webp',
            price: '18.43',
            reviews: '4.8',
          },
        ],
        dealsDate : '1624772466653',
        scrollY: new Animated.Value(0),
      };
    }

    render() {   
      let searchOpacity = this.state.scrollY.interpolate({
        inputRange: [0, 150],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      });
      let searchIconOpacity = this.state.scrollY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      });
      let searchHeight = this.state.scrollY.interpolate({
        inputRange:  [0, 150],
        outputRange: [65, 0],
        extrapolate: 'clamp',
      });
      let searchTop = this.state.scrollY.interpolate({
        inputRange:  [0, 150],
        outputRange: [0, -50],
        extrapolate: 'clamp',
      });
      let raduios = this.state.scrollY.interpolate({
        inputRange:  [0, 150],
        outputRange: [20, 0],
        extrapolate: 'clamp',
      });

      return (
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar
              backgroundColor="#d15400"
              barStyle="light-content"
          />
          <View style={styles.container}>
            <View style={styles.headerView}>
              <View style={styles.header}>
                <TouchableHighlight underlayColor="rgba(255,255,255, 0.2)" style={{marginLeft:9,borderRadius:100,width:50,height:50,alignItems:'center',justifyContent:'center'}} onPress={() => this.props.navigation.openDrawer()}>
                    <View style={styles.headerMenu}><Image style={{resizeMode: 'contain', width:40, height:40*0.79}} source={require('./imgs/ic_menu.png')} /></View>
                </TouchableHighlight>
                <View style={styles.headerLogo}><Image style={{resizeMode: 'contain', width:150,height:40}} source={require('./imgs/logo.png')} /></View>
                
                <View style={styles.headerNotif}>
                  <View style={{flexDirection:'row',marginTop:6}}>
        
                    <TouchableHighlight underlayColor="rgba(255,255,255, 0.2)" style={{borderRadius:100,width:50,height:50,alignItems:'center',justifyContent:'center',marginTop:-7,}} onPress={() => this.props.navigation.openDrawer()}>
                       <Animated.Image style={{resizeMode: 'contain', width:30, height:30,opacity:searchIconOpacity,}} source={require('./imgs/ic_white_search.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="rgba(255,255,255, 0.2)" style={{borderRadius:100,width:50,height:50,alignItems:'center',justifyContent:'center',marginRight:0,marginTop:-7}} onPress={() => this.props.navigation.openDrawer()}>
                       <Image style={{resizeMode: 'contain', width:30, height:30}} source={require('./imgs/ic_notif.png')}/>  
                    </TouchableHighlight>

                  </View>
                  
                </View>
              </View>
              <Animated.View style={{height:searchHeight,alignItems: 'center',transform:[{translateY:searchTop}], opacity: searchOpacity}}>
                <View style={{backgroundColor:'rgba(255,255,255, .88)',width:'85%',height:50,borderRadius:30,marginBottom:15,flexDirection:'row'}}>   
                  <Image style={{flex:1,resizeMode: 'contain', width:25, height:25,marginTop:12,}} source={require('./imgs/ic_search.png')}></Image>
                  <Text style={{flex:4,fontSize:19,color:'rgba(255,102,0, .4)',paddingTop:11,}}>Search</Text>
                  <Image style={{flex:1,resizeMode: 'contain', width:25, height:25,marginTop:12,}} source={require('./imgs/ic_qrcode.png')}></Image>
                </View>
              </Animated.View>
            </View>
            
            {/*** Body ***/}
            <Animated.View style={{flex: 3,backgroundColor: '#f3f3f3',alignItems: 'center',bottom: 0,width:'100%',borderTopLeftRadius: raduios,borderTopRightRadius: raduios,}}>
              <Animated.ScrollView
                  onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
                    {useNativeDriver: false}
                  )
                }
              >
                {/* Card Products FlashDeals*/}
                <CategoriesScroll/>

                {/* Slider Home */}
                <View style={styles.sliderHome}>
                  <SliderBox 
                      autoplay 
                      ImageComponentStyle={{borderRadius: 20, width: '92%'}} 
                      images={this.state.images}
                      underlayColor ="#f60"
                      activeOpacity={0}
                      inactiveDotColor="#fff"
                      dotColor="#f60"
                      dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        padding: 0,
                        margin: 0,
                      }}
                  />
                </View>
                
                {/* Card Products FlashDeals*/}
                <FlashDeals deals={this.state.Deals} date={this.state.dealsDate}/>

                {/* Products Flatlist*/}
                <ListTrendPrd/>

              </Animated.ScrollView>
            </Animated.View>
          </View>
        </SafeAreaView>   
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f60',
    alignItems: 'center',
  },
  headerView: {
    top: 0,
    width:'100%',
    height:'auto',
  },
  header:{
    flexDirection: 'row',
    marginTop:15,
    marginBottom:15,
  },
  headerMenu:{
    flex: .66,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerLogo:{
    flex: 3,
    alignItems: 'center',
  },
  headerNotif:{
    height:30,
    flex: 1.34,
    alignItems: 'flex-end',

  },
  headerSearch:{
    alignItems: 'center',
    backgroundColor: 'red'
  },
  sliderHome:{
    backgroundColor: 'rgba(255, 255,255, 0)',
    marginTop:30,
    marginBottom:10,
  },
  
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
    backgroundColor: '#ff9651',
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

  cardPrdHeader:{
    paddingTop: 5,
    flexDirection: 'row',
  },
  cardPrdHolder: {
    paddingHorizontal: 0,
    paddingLeft:5,
    paddingRight:5,
  },
  cardPrdImage: {
    height: 130,
    width: 130,
    backgroundColor: '#f60',
    borderRadius: 14,
    borderColor:'#f60',
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center'
  },
  cardPrdText: {
    marginTop: 0,
    marginLeft: 2,
    fontSize:18,
    fontWeight:'bold',
    color:'#f60',
    fontWeight: '900',
    textAlign:'left'
  },
  cardPrdReview: {
    marginTop: -3,
    marginLeft: 2,
    marginRight: 4,
    fontSize:14,
    color:'rgba(0,0,0,0.67)',
    textAlign:'left'
  },
  cardPrdView: {
    paddingVertical: 4,
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  HolderPrds:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

