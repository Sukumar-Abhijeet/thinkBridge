/**
 *  Created By @name Sukumar_Abhijeet
 */
import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';
import withAppTheme, { AppTheme } from '../../hoc/withAppTheme';

interface ButtonProps{
    text:string,
    onPress?:()=>void,
    theme?:AppTheme,
    styles?:any,
    textProps?:any,
    isDisabled?:boolean,
    variant?:string,
}

const Button = ({...props}: ButtonProps) =>{
    const {theme,text,onPress, styles : customStyles, textProps,isDisabled,variant} = props;
     return(
         <TouchableOpacity disabled={isDisabled} onPress={onPress} style={[styles(theme).buttonContainer,customStyles,isDisabled && {backgroundColor:theme.colors.dark},variant&& styles(theme).outline ]}>
             <Text style={[styles(theme).defaultText, variant && styles(theme).textVariant]} {...textProps}>{text}</Text>
         </TouchableOpacity>
     )
 };

 export default withAppTheme(Button);
const styles  = theme => StyleSheet.create({
    buttonContainer:{
        backgroundColor:theme.colors.primary,
        paddingHorizontal:theme.spacing.medium,
        paddingVertical:theme.spacing.small,
        borderRadius:theme.spacing.small,
        justifyContent:'center',
        alignItems:'center',
    },
    defaultText:{
        color:theme.textColors.primary,
    },
    outline:{
        backgroundColor:'transparent',
        borderColor:theme.colors.primary,
        borderWidth:2,
    },
    textVariant:{
        color:theme.colors.primary,
    }
});