/**
 *  Created By @name Sukumar_Abhijeet
 */
import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Button from '../../../components/Button';
import Toast from 'react-native-simple-toast';
import { ADD_NEW_CATEGORY } from '../../../@redux/redux.constants';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';

interface AddMediaProps{
    showModal:boolean,
    setShowModal:Function,
    isFavourite:boolean,
    category:string,
    categoryData:Array<Object>,
    categoriesList:Array<string>,
    categoryStoreData:Object
}

const AddMedia = ({...props}:AddMediaProps) =>{

    const dispatch = useDispatch();
    const storeValue = useSelector(store => store.category.catStore);

    const {showModal, setShowModal,isFavourite,category,categoryData, categoriesList, categoryStoreData} = props;

    const [showOptions, setShowOptions] = useState(false);
    const [categoryName, setCategoryName] = useState('');

    const [selected, setSelected] = useState(category);
    const [selectedMedia, setSelectedMedia] = useState(null);

    const imageOptions = {
        mediaType : 'photo',
    }

    useEffect(()=>{
        if(categoryName){
            const newCatData = categoryStoreData[selected];
            newCatData.push(selectedMedia);
            Toast.show('Media Added Successfully');
        }
    },[storeValue])

    const storeMedia = result => {
        if(result.assets){
            setShowOptions(true);
            setSelectedMedia(result.assets[0]);
        }
        else if(result.didCancel) Toast.show('Opening Cancelled');
        else Toast.show('Oops! Something went wrong');
    }

    const handleCamera = async () => {
        const result = await launchCamera(imageOptions);
        storeMedia(result);
    };

    const handleGallery = async () => {
        const result = await launchImageLibrary(imageOptions);
        storeMedia(result);
    };
    
    const handleChangeOptions = () => {
         try{
            const media = {
                isFavourite,
                ...selectedMedia
            };
            if(categoryName.length){
                if(categoriesList.includes(categoryName.toUpperCase())) Toast.show('Category Already Exists');
                else{
                    setSelected(categoryName.toUpperCase());
                    dispatch({type: ADD_NEW_CATEGORY,payload:categoryName.toUpperCase()});
                }
            }
            else if(selected === category) categoryData.push(media);
            else {
                const newCatData = categoryStoreData[selected];
                newCatData.push(media);
            }
            Toast.show('Added Successfully');
            setTimeout(()=>{
                setShowModal(false);
            },600);
         }
        catch(err){
            Toast.show('Oops! Something went wrong');
        }
    }

    const renderModal = () => {
        return(
            <View style={styles.modalContainer}> 
                {
                    showOptions ? 
                    <View style={styles.optionsContainer}>
                        <Text>Want to Select Another Category ? </Text>
                        <View style={styles.listWrapper}>
                            {
                                categoriesList.map((item,i)=> <Button key={i} text={item} styles={styles.button} variant={selected === item ? null : 'outline' } onPress={()=>setSelected(item)} />)
                            }
                        </View>
                        <Text>OR</Text>
                        <TextInput 
                            autoCapitalize='none' 
                            onChangeText={(string) => setCategoryName(string) } 
                            placeholder="Enter a new category .." 
                            placeholderTextColor="#414756"
                            style={styles.textInputBox}
                            value={categoryName}
                        />
                        <Button text={'Add'} onPress={handleChangeOptions} />
                    </View>
                        :
                    <>
                        <Text>Select Option</Text>
                        <Button styles={styles.cameraButton} text={'Open Camera'} onPress={handleCamera} />
                        <Button text={'Open Gallery'} onPress={handleGallery} />
                    </>
                }
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
                {renderModal()}
            </Modal>
         </>
     )
 };

 const styles = StyleSheet.create({
    modalContainer:{
        width:'90%',
        minHeight:100,
        backgroundColor:'#fff',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    cameraButton:{
        marginVertical:10
    },
    textInputBox:{
        width:'100%',
        height:50,
        borderColor:'#000',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginVertical:10
    },
    listWrapper:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginVertical:10
    },
    button:{
        marginRight:10,
        marginBottom:10
    }
});

 export default AddMedia;
