import {View,Text,StyleSheet,Image} from 'react-native';


function Kyc(){
    return(
        <View style={styles.kycDetail}>
        <View style={styles.allKycImage}>
            <Image style={styles.bt}source={require('../Image/bt.jpg')}/>
            <View style={styles.texts}>
            <Text style={styles.text}>Transaction blocked!</Text>
            <Text style={styles.text2}>Complete KYC to activate Ring limit</Text> 
            </View>
            <Image style={styles.arrow}source={require('../Image/arrow.jpg')}/>
        </View>



        </View>

    )
};

export default Kyc;

const styles = StyleSheet.create({
    kycDetail:{
        width:350,
        height:80,
        backgroundColor:'#FFF4F4',
        borderColor:'#DD5B5B',
        borderWidth:2,
        borderRadius:12,
        marginVertical:16,
        marginHorizontal:20,


    },
    allKycImage:{
        flexDirection:'row'
    },
    bt:{
        width:70,
        height:50,
        marginLeft:14,
        marginVertical:12,
    },
    arrow:{
        width:35,
        height:35,
        marginVertical:22,
        marginLeft:24

    },
    text:{
        width:176,
        fontSize:18,
        marginLeft:12,
        marginTop:12,
        fontWeight:'bold',

    },
    text2:{
        width:176,
        fontSize:12,
        marginLeft:12,
        fontWeight:'bold',

    },
    texts:{
        flexDirection:'column'
    }

})