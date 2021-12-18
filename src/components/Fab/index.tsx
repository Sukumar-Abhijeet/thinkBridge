/**
 *  Created By @name Sukumar_Abhijeet
 */
import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';
import withAppTheme, { AppTheme } from '../../hoc/withAppTheme';

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
        width:50,
        height:50,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
    },
    plus:{
        fontSize:30,
        color:theme.colors.light,
    }
});