import {View,Image,StyleSheet,Dimensions} from 'react-native'


function Header(){
    return(
        <View style={styles.Header}>
    <Image style={styles.nav} source={require('../Image/icon.jpg')} />
    <Image style={styles.Logo} source={require('../Image/RingLogo.jpg')} />
    <Image style={styles.scan}  source={require('../Image/scan.jpg')} />
    </View>
    )
}

export default Header;

const deviceWidth=Dimensions.get('window').width

const styles = StyleSheet.create({
  nav:{
    height:deviceWidth < 380 ? 25  : 30,
    width:deviceWidth < 380 ? 25 : 30
  },
    

  Header:{
      marginHorizontal: deviceWidth < 380 ? 18 : 18,
      flexDirection:'row',
      
  
    },
    Logo:{ 
       width: deviceWidth < 380 ? 90 : 90, 
       height: deviceWidth < 380 ? 40 : 40  , 
      marginLeft:deviceWidth < 380 ? 90 : 100,
    },
    scan:{
      width:deviceWidth < 380 ? 30 : 30,
      height:deviceWidth < 380 ? 30 : 30,
      marginLeft:deviceWidth < 380 ? 90 : 110,
      marginTop:deviceWidth < 380 ? 5 : 8
    }
  });
  