/**
 *  Created By @name Sukumar_Abhijeet
 */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const Category = ({category}) =>{

    const navigation = useNavigation();
    const navigateToView= () => navigation.navigate('View',{category});

     return(
         <TouchableOpacity style={styles.categoryBox} onPress={navigateToView}>
             <Text>{category}</Text>
         </TouchableOpacity>
     )
 };

 export default Category;
const styles = StyleSheet.create({
    categoryBox:{
        width : 160,
        height: 160,
        backgroundColor:'#ebebeb',
        borderRadius:10,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center'
    }
});