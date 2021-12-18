/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import AppStack from './src/@navigation/stack/index';
import Loader from './src/components/Loader';
import reduxStore from './src/@redux/redux.store';

const reduxPersistStore = persistStore(reduxStore); 

const App = () => {
    return(
        <Provider store={reduxStore}>
             <PersistGate loading={<Loader />} persistor={reduxPersistStore}>
                <AppStack />
             </PersistGate>
        </Provider>
    )
}

export default App;
