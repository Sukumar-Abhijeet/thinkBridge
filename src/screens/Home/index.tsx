/**
 *  Created By @name Sukumar_Abhijeet
 */
import React from 'react';
import {SafeAreaView,View,Text,StyleSheet} from 'react-native';
import Button from '../../components/Button';

interface HomeScreenProps{
  navigation:{
    navigate:Function
  }
}

const HomeScreen = ({navigation}:HomeScreenProps) =>{

  const navigateCategory = () => navigation.navigate('Categories');

     return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text>Welcome to</Text>
        <Text style={styles.thinkBridge}>ThinkBrigde</Text>
        <Button
          styles={styles.button} 
          text={'View Categories'} 
          onPress={navigateCategory} 
        />
      </View>
    </SafeAreaView>
  );
 };

 export default HomeScreen;
 const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    wrapper:{flex:1,justifyContent:'center',alignItems:'center'},
    thinkBridge:{
      fontSize:30,
      fontWeight:'bold',
    },
    button:{
      marginTop:20,
    },
  });