import {View,Image,StyleSheet} from 'react-native'


function Header(){
    return(
        <View style={styles.Header}>
    <Image style={{ width: 30, height: 30 }} source={require('../Image/icon.jpg')} />
    <Image style={styles.Logo} source={require('../Image/RingLogo.jpg')} />
    <Image style={styles.scan}  source={require('../Image/scan.jpg')} />
    </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    
    Header:{
      marginHorizontal:20,
      flexDirection:'row',
      
  
    },
    Logo:{
       width: 90, 
       height: 40  , 
      marginLeft:90,
    },
    scan:{
      width:30,
      height:30,
      marginLeft:110,
      marginTop:5
    }
  });
  