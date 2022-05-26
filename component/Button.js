import {Text,StyleSheet,View,Pressable,Image} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'




function Button(){
    return (
        <Pressable>
    <View style={styles.payCol}>
    <LinearGradient style={styles.press} colors={['#02649B','#590FB7']}>
    <View style={styles.ScanPay}>
    <Image style={styles.scan}  source={require('../Image/scan.jpg')}/>
    <Text style={styles.payNow} >Scan And Pay</Text>
        
    </View>
    
    </LinearGradient>
    </View>
      </Pressable>
 )
    

}

export default Button;

const styles = StyleSheet.create({
    payCol:{
        
        height:100,
        borderColor:'white',
        borderWidth:2,
        borderRadius:16,
        marginLeft:12,
        
        
    },
    press:{
        marginLeft:64,
        width:227,
        height:60,
        borderRadius:40,
    },
    payNow:{
        color:'white',
        fontSize:18,
        marginLeft:20,
        marginVertical:6
        
        
    },
    scan:{
        width:30,
        height:30,
        marginVertical:4
       
      },
      ScanPay:{
          flexDirection:'row',
          marginLeft:40,
          marginVertical:12,
      }
    
})