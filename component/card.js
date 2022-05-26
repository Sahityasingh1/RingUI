import {View,Text,ImageBackground,StyleSheet,Image} from 'react-native'




function Card(){
    return (
<View style={styles.container}>

 <View style={styles.BothCard}>
 <View style={styles.firstCard}>
    <ImageBackground 
     style={styles.bgImage}
     source={require('../Image/download.jpeg')}
    >
    <Text style={styles.txt}>Available Limit</Text>
    <Text style={styles.num}> ₹ 30,000</Text>
    <View style={styles.allCash}>
    <Text style={styles.num1}>₹ 0</Text>
    <Text style={styles.num2}>₹ 30,000</Text>

    </View>
    <Text  style={styles.numBottom}>All in one limit for Scan & Pay. Bank Transfer and Prepaid Card</Text>
    
    </ImageBackground>
</View>
<View style={styles.secondCard}>
<Image style={styles.Atm} source={require('../Image/Atm.jpg')} />
</View>

</View>




 

</View>



    )
}


export default Card;

const styles = StyleSheet.create({
    container:{
        height:195,
        width:1000,
        marginVertical:25,
    },

    bgImage:{
        width:280,
        height:180,
        marginHorizontal:12,
        marginVertical:16,
        borderColor:'black',
        borderWidth:2,
        overflow:'hidden',
        borderRadius:16
    },
    Atm:{
        width:280,
        height:180,
    },
    BothCard:{
        flexDirection:'row',
    
    },
    secondCard:{
        marginVertical:16,
        borderRadius:16,
        borderColor:'black',
        borderWidth:2,
        overflow:'hidden',
    },
    txt:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        marginHorizontal:14,
        marginTop:14,
    },
    num:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        marginHorizontal:14,
    },
    num1:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        marginHorizontal:14,
        marginLeft:24
    },
    num2:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',
        marginHorizontal:14,
        marginLeft:134,

    },
    allCash:{
        marginTop:24,
        paddingBottom:24,
        borderBottomColor:'white',
        borderBottomWidth:1,
        flexDirection:'row',

    },
    numBottom:{
        marginTop:12,
        color:'white',
        fontSize:12,
        marginHorizontal:14,
    }



})