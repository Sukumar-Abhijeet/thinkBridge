/**
 *  Created By @name Sukumar_Abhijeet
 */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';
import withAppTheme, {AppTheme} from '../../hoc/withAppTheme';
import { moderateScale } from '../../utils/helpers';

interface CategoryProps{
    category:string,
    theme:AppTheme
}

const Category = ({category,theme} : CategoryProps) =>{

    const {textColors:{secondary}} = theme;
    const navigation = useNavigation();
    const navigateToView= () => navigation.navigate('View',{category});

     return(
         <TouchableOpacity style={styles.categoryBox} onPress={navigateToView}>
             <Text style={{color:secondary}}>{category}</Text>
         </TouchableOpacity>
     )
 };

 export default withAppTheme(Category);
const styles = StyleSheet.create({
    categoryBox:{
        width : moderateScale(140),
        height: moderateScale(160),
        backgroundColor:'#ebebeb',
        borderRadius:10,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center'
    }
});