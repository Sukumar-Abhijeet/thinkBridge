/**
 *  Created By @name Sukumar_Abhijeet
 */
import React,{useState} from 'react';
import {View,Text,SafeAreaView,StyleSheet,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import FabButton from '../../components/Fab';
import Category from './category';
import AddCategory from './addCategory';

interface CategoriesScreenProps{
    categoriesList:Array<string>
}

const CategoriesScreen = ({categoriesList}: CategoriesScreenProps) =>{

    const [showModal, setShowModal] = useState(false)

    if(!categoriesList.length) return <Text>No Categories Found</Text>
     return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.categoryBoxWrapper}> 
                    {categoriesList.map((category,index)=> <Category key={index} category={category} />)}
                    <FabButton onPress={()=>setShowModal(true)}  />
                </View>
            </ScrollView>
            <AddCategory categoriesList={categoriesList} showModal={showModal} setShowModal={setShowModal}  />
        </SafeAreaView>
     )
 };


 const mapStateToProps = (state) =>{
     return{
        categoriesList:state.category.categoriesList,
     }
 };

 const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    wrapper:{flex:1},
    categoryBoxWrapper:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        padding:20
    },
  });

 export default connect(mapStateToProps)(CategoriesScreen);
