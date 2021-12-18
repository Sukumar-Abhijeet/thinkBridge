/**
 *  Created By @name Sukumar_Abhijeet
 */
import React,{useState} from 'react';
import {View,Image,StyleSheet} from 'react-native';
import Button from '../../../components/Button';
import { DEF_CAT } from '../../../@redux/reducers/categoryReducer';
import Toast from 'react-native-simple-toast';

interface TilesProps{
    tile:{
        uri:string,
        fileName:string,
    },
    category:string,
    categoryStoreData:Object
}

const Tiles = ({tile,category,categoryStoreData} : TilesProps) =>{

    const {uri,fileName} = tile;
    const fevCategoriesData = categoryStoreData[DEF_CAT[0]];

    const isFev = fevCategoriesData  ?  fevCategoriesData.findIndex(media => media.fileName === fileName) === -1 ? false : true : false;

    const [addToFev, setAddToFev] = useState(isFev); 

    const handleAddToFev = () =>{
        try{
            console.log('fevCategoriesData',fevCategoriesData);
            fevCategoriesData.push(tile);
            setAddToFev(true);
            setTimeout(()=>{
                Toast.show('Added to Fev');
            },400);
        }
        catch(err){
            Toast.show('Oops Something went wrong');
        }
    };

     return(
         <View style={styles.tileContainer}>
            <Image source={{uri:uri}} style={styles.imageBox} />
            {
                category !== DEF_CAT[0] && <Button text={ addToFev ? 'Added' : 'Add To Fev'} onPress={handleAddToFev} isDisabled={addToFev} styles={styles.button} />
            }
         </View>
     )
 };

 export default Tiles;
const styles = StyleSheet.create({
    imageBox:{
        width:160,
        height:160,
        borderRadius:10,
    },
    tileContainer:{
        marginBottom:20,
    },
    button:{
        position:'absolute',
        bottom:0,
        right:0,
    }
});