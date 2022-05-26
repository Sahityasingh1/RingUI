import {View,Text,Image,StyleSheet} from 'react-native'

function CashbackCard(){
    return <View style={styles.all}>
    <View style={styles.left}>
    <Text style={styles.text}>IdeoPay Cashback</Text>
    <Text style={styles.date}>31 Jan, 2022</Text>
    </View>
    <View style={styles.right}>
    <View style={styles.rightLeft}>
    <Text style={styles.txt}>+ ₹60</Text>
    <Text style={styles.received}>Received</Text>
    </View>
    <View style={styles.rightImage}>
    <Image style={styles.Image} source={require('../Image/arr.jpg')}/> 

    </View>



    </View>

    </View>

}

export default CashbackCard;

const styles= StyleSheet.create({
    all:{
        flexDirection:'row',
        marginHorizontal:4,
        marginVertical:24,
        borderBottomColor:'#70707033',
        borderBottomWidth:1,
        paddingBottom:8,
    },
    right:{
        marginLeft:122,
        flexDirection:'row',
    },
    text:{
        fontSize:16,
    },
    date:{
        color:'#00000080',
        fontSize:10,
    },
    txt:{
        fontSize:15,
        fontWeight:'bold',
    },
    received:{
        color:'#029B5A',
        fontSize:10,

    },
    rightImage:{
        marginLeft:16,
        marginTop:6,

    },
    Image:{
        width:12 ,
        height:18 ,
    }



})