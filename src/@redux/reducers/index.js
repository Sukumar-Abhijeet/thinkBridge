 import AsyncStorage from '@react-native-community/async-storage';
 import { persistCombineReducers } from 'redux-persist';
 import categoryReducer from './categoryReducer';

 const config = {
     key: 'ThinkBridge',
     storage: AsyncStorage,
 };
 
 const combinedReducers = persistCombineReducers(config, {
     category: categoryReducer,
 });
 
 const rootReducer = (state, action) => combinedReducers(state, action);
 
 export default rootReducer;
 