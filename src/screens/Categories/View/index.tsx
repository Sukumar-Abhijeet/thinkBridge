/**
 *  Created By @name Sukumar_Abhijeet
 */
import React,{useEffect,useState} from 'react';
import {SafeAreaView,Text,StyleSheet,View,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import Tiles from './tiles';
import FabButton from '../../../components/Fab/index';
import AddMedia from './addMedia';
import { DEF_CAT } from '../../../@redux/reducers/categoryReducer';

interface CategoryViewScreenProps{
    categoryStoreData:Object,
    navigation:any,
    route:{
        params:{
            category:string
        }
    },
    categoriesList:Array<string>
}

const CategoryViewScreen = ({...props}: CategoryViewScreenProps) =>{
    const {
        navigation,
        route:{params:{category}},
        categoryStoreData,
        categoriesList
    } = props;

    const [showModal, setShowModal] = useState(false);

    const categoryData = categoryStoreData[category];
    const setHeader = () => navigation.setOptions({ title: category });

    useEffect(() => {
        setHeader();
    }, [])

    const addMediaProps = {
        showModal,setShowModal,
        isFavourite : category===DEF_CAT[0],
        category,
        categoryData,
        categoriesList,
        categoryStoreData
    }
    
     return(
         <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.wrapper}>
                <View style={styles.tilesWrapper}>
                    {categoryData && categoryData.length ? categoryData.map((item,index) => <Tiles categoryStoreData={categoryStoreData} category={category} tile={item} key={index} />) : <Text>No Data</Text>}
                </View>
            </ScrollView>
            <View style={styles.addButton}>
                   {category !== DEF_CAT[0] && <FabButton onPress={() => setShowModal(true)} />}
                </View>
             <AddMedia {...addMediaProps} />
         </SafeAreaView>
     )
 };

 const mapStateToProps = (state) => ({
        categoryStoreData:state.category.catStore,
        categoriesList : state.category.categoriesList,
});

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    wrapper:{
        flex:1,
        padding:10,
    },
    addButton:{
        position:'absolute',
        bottom:30,
        right:30
    },
    tilesWrapper:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        padding:10
    }
});


export default connect(mapStateToProps)(CategoryViewScreen);