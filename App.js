import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './component/Header';
import Card from './component/card';
import Kyc from './component/Kyc';
import Pending from './component/Pending';
import Recent from './component/Recent';
import Button from './component/Button';





export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <Header/>
    <ScrollView>
    <Card/>
    <Kyc/>
    <Pending/>
    <Recent/>
   
    <Button/>
    

    </ScrollView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
  },
  
});
