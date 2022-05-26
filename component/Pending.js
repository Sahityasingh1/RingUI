import {View,Text,StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';



function Pending(){
    return(
        <View style={styles.pendingDetail}>
        <View style={styles.allText}>

        <View style={styles.header}>
        <Text style={styles.txt}>Pending Payment</Text>
        <View style={styles.orgTxt}>
            <Text style={styles.txt1} > Due in 4 Days</Text>
        </View>

        </View>
        <View style={styles.footer}>
        <Text>Your repayment due on 15 Feb 22.</Text>
        <Text>Please pay to avoid late payment charges.</Text>

        </View>
        

        </View>

        <View style={styles.pay}>
        <Text style={styles.num}>₹309</Text>
        
        <View >
        <LinearGradient style={styles.payCol} colors={['#02649B','#590FB7']}>
            <Text style={styles.payNow} >PAY NOW</Text>
        </LinearGradient>
        </View>

       
        

        </View>
       


        </View>


    )
}

export default Pending;

const styles = StyleSheet.create({
    pendingDetail:{
        width:370,
        height:120,
        backgroundColor:'#EFF4FD',
        borderColor:'white',
        borderWidth:2,
        borderRadius:12,
        marginVertical:16,
        marginLeft:12,
        marginRight:10,
        
        flexDirection:'row'



    },
    
    txt:{
        color:'#02649B',
        fontSize:16,
        marginLeft:20,
        marginTop:12,

    },
    orgTxt:{
        backgroundColor:'#FF7600D5',
        width:100,
        height:28,
        borderColor:'white',
        borderWidth:0,
        borderRadius:24,
        marginTop:12,
        marginLeft:12,
        padding:4
    },
    payCol:{
       
        width:70,
        height:28,
        borderColor:'white',
        borderWidth:2,
        borderRadius:16,
        marginLeft:12
        
    },
    txt1:{
        color:'white',

    },
    header:{
        flexDirection:'row'
    },
    footer:{
        marginTop:16,
        flexDirection:'column',
        marginLeft:12,
    },
    num:{
        color:'#02649B',
        marginTop:16,
        fontSize:20,
        marginLeft:28
    },
    payNow:{
        color:'white',
        fontSize:12,
        padding:4,
        paddingLeft:6,
    },
    pay:{
        marginTop:8
    }
    
})