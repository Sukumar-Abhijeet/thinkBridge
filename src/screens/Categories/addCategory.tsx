/**
 *  Created By @name Sukumar_Abhijeet
 */
import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {ADD_NEW_CATEGORY} from '../../@redux/redux.constants';

interface AddCategoryProps{
    showModal:boolean,
    setShowModal:Function,
    categoriesList:Array<string>,
}

const AddCategory = ({showModal, setShowModal,categoriesList}:AddCategoryProps) =>{

    const dispatch = useDispatch();

    const [categoryName, setCategoryName] = useState('');

    const handleAddCategory = () => {
        if(!categoryName.length) Toast.show('Please Enter Category Name'); 
        else if(categoriesList.includes(categoryName.toUpperCase())) Toast.show('Category Already Exists');
        else{
            dispatch({type: ADD_NEW_CATEGORY,payload:categoryName.toUpperCase()});
            setShowModal(false)
            setCategoryName('');
        }
    }

    const renderCategoryAddBox = () => {
        return(
            <View style={styles.modalContainer}> 
                <Text>Add Category</Text>
                <TextInput 
                        autoCapitalize='none' 
                        onChangeText={(string) => setCategoryName(string) } 
                        placeholder="Enter a category .." 
                        placeholderTextColor="#414756"
                        style={styles.textInputBox}
                        value={categoryName}
                    />
                <Button text={'Add Category'} onPress={handleAddCategory} />
            </View>
        )
    }

     return(
         <>
            <Modal
                backdropColor={'#000'}
                dismissable={true}
                hasBackdrop={true}
                isVisible={showModal}
                onBackButtonPress= {()=>{
                    setShowModal(false);
                }}
                onBackdropPress = {()=>{
                    setShowModal(false);
                }}
                style={{justifyContent:'center',alignItems:'center',margin:0,padding:0}}
                useNativeDriver={true}
            >
                {renderCategoryAddBox()}
            </Modal>
         </>
     )
 };

 export default AddCategory;
const styles = StyleSheet.create({
    modalContainer:{
        width:'80%',
        height:'20%',
        backgroundColor:'#fff',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    textInputBox:{
        width:'80%',
        height:50,
        borderColor:'#000',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginVertical:10
    }
});