import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';


const HomeStack = createStackNavigator(
    {
        HomeScreen
    },
    {
        initialRouteName: 'HomeScreen'
    }
);



// const MainStack = createStackNavigator(
//     {

//     },
//     {

//     }
// )

export default createAppContainer(HomeStack)