/**
 *  Created By @name Sukumar_Abhijeet
 */
import React from 'react';
import {SafeAreaView,View,Text,StyleSheet} from 'react-native';
import Button from '../../components/Button';
import withAppTheme, { AppTheme } from '../../hoc/withAppTheme';

interface HomeScreenProps{
  navigation:{
    navigate:Function
  },
  theme:AppTheme
}

const HomeScreen = ({navigation,theme}:HomeScreenProps) =>{

  const {textColors:{secondary}} = theme;

  const navigateCategory = () => navigation.navigate('Categories');

     return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{color:secondary}}>Welcome to</Text>
        <Text style={[styles.thinkBridge,{color:secondary}]}>ThinkBrigde</Text>
        <Button
          styles={styles.button} 
          text={'View Categories'} 
          onPress={navigateCategory} 
        />
      </View>
    </SafeAreaView>
  );
 };

 export default withAppTheme(HomeScreen);
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