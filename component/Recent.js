import {View,Text,StyleSheet} from 'react-native'
import CashbackCard from './CashbackCard';


function Recent(){
    return <View style={styles.all}>
    <View style={styles.recent}>
    <Text style={styles.text}>Recent Transactions</Text>
    <Text style={styles.view}>View All</Text>
    </View>
    <CashbackCard/>
    <CashbackCard style={{marginTop:12}}/>
    



    </View>

}

export default Recent;

const styles =StyleSheet.create({
    all:{
        marginHorizontal:20,
    },
    text:{
        fontSize:20,
        
    },
    recent:{
        
        marginTop:12,
        flexDirection:'row',
    },
    view:{
        color:"#02649B",
        marginLeft:96,
        marginTop:5,
        borderBottomColor:'#02649B',
        borderBottomWidth:2,
        fontSize:14,
        fontWeight:'bold',
    }

})