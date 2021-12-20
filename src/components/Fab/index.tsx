/**
 *  Created By @name Sukumar_Abhijeet
 */
import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';
import withAppTheme, { AppTheme } from '../../hoc/withAppTheme';
import { moderateScale } from '../../utils/helpers';

interface FabButtonProps{
    onPress:()=>void,
    theme: AppTheme
}

const FabButton = ({onPress,theme}: FabButtonProps) =>{
     return(
         <TouchableOpacity onPress={onPress} style={styles(theme).circle}>
             <Text style={styles(theme).plus}>+</Text>
         </TouchableOpacity>
     )
 };

 export default withAppTheme(FabButton);
const styles = theme => StyleSheet.create({
    circle:{
        backgroundColor:theme.colors.primary,
        width:moderateScale(50),
        height:moderateScale(50),
        borderRadius:moderateScale(25),
        justifyContent:'center',
        alignItems:'center',
    },
    plus:{
        fontSize:30,
        color:theme.colors.light,
    }
});