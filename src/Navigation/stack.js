import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons'; 
import HomeScreen from '../view/Home/home'
import {TouchableOpacity,Image} from 'react-native';
const Stack = createStackNavigator();

export const HomeStackScreen = ({navigation}) => {
    // console.log(navigation)
    return (
        <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
            height: 90,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
            <Stack.Screen 
            name="home" 
            component={HomeScreen} 
            options={{ 
                headerLeft: ()=> (
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        // style={{ width: 50,textAlign:'center'}}
                        >
                        <Entypo name="menu" size={50} color="black"/>
                        {/* <Image
                             style={{
                                height:50,width:50
                             }}
                             source={{
                                uri:
                                  'https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg',
                              }}
                        /> */}
                    </TouchableOpacity>
                ),
                // headerTitle :() => <Logo/>,
                // headerRight :() => <DropDown/>

             }}
            />
        </Stack.Navigator>
    );
}