import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Perfil from './pages/Perfil'
import Contato from './pages/contato/index'
import Perguntas from './pages/perguntas/stack'

import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

function Routes({route}) {
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor:'#033560',
                tabBarInactiveTintColor:'#7296B6',
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#FFF',
                    borderTopWidth:0,

                    left: 14,
                    right:14,
                    height:70,
                    marginBottom:12,
                    paddingBottom:10,
                    
                    // borderTopWidth:5,
                    // borderBottomWidth: 5,
                    // borderLeftWidth:20,
                    // borderRightWidth:20,
                    // borderBottomColor: '#033560',
                    // borderTopColor: '#FFF',
                    // borderLeftColor: '#FFF',
                    // borderRightColor: '#FFF',
                    //borderColor:'',
                    elevation:0,
                    borderRadius: 10,
                }
            }}
        >

            <Tab.Screen
            name="Perfil"
            component={Perfil}
            initialParams={route.params.user}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if (focused) {
                      return <AntDesign name="user" size={35} color={color} />;
                    } else {
                      return <AntDesign name="user" size={35} color={color} />;
                    }
                    
                }
            }}
            />
            <Tab.Screen
            name="Perguntas"
            component={Perguntas}
            initialParams={route.params.user}
            options={{
                headerShown:false,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <AntDesign name="question" size={35} color={color}/>
                    }
                    return <AntDesign name="question" size={35} color={color}/>
                }
            }}

            />

            <Tab.Screen
            name="Contato"
            component={Contato}
            options={{
                headerShown:false,
                tabBarIcon: ({color, size, focused}) => {
                    if(focused){
                        return <AntDesign name="contacts" size={35} color={color}/>
                    }
                    return <AntDesign name="contacts" size={35} color={color}/>
                }
            }}

            />

        </Tab.Navigator>
    )
}

export default Routes;