import React from 'react';
import { createAppContainer, createStackNavigator, } from 'react-navigation';

import ChatContainer from './pages/ChatContainer';

export default createAppContainer(
    createStackNavigator({
        ChatContainer,

    }, {
            initialRouteName: 'ChatContainer',
            defaultNavigationOptions: {
                headerTitle: 'Parrot Chat',
                headerTintColor: '#fff',
                headerBackTitle: null,
                headerStyle: {
                    backgroundColor: "#2196f3",
                  
                }
            },
        
            mode: 'modal'
        }
    )
)

