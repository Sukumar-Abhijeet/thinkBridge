/**
 *  Created By @name Sukumar_Abhijeet
 */
import React from 'react';
import theme from '../configs/AppTheme';

export type AppTheme  = {
    colors : {
        primary:string,
        secondary:string,
        success:string,
        error:string,
        warning:string,
        dark:string,
        light:string
        info:string
        default:string
    },
    textColors:{
        primary:string,
        secondary:string,
    }
    spacing : {
        tiny:number,
        small:number,
        medium:number,
        large:number
        huge:number
    }
} 

const withAppTheme = WrappedComponent => props => {
    const appTheme = {
        colors : theme.APP_COLORS,
        textColors : theme.TEXT_COLORS,
        spacing : theme.APP_SPACING,
    }
     return <WrappedComponent theme={appTheme} {...props} />
 };

 export default withAppTheme;