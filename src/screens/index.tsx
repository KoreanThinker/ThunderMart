import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { color1, headerHeight } from '..//components/style';
import Icon from 'react-native-vector-icons/Entypo'

import HomeScreen, {
    CategoryDetailScreen,
    ItemSearchScreen
} from './HomeScreen';

import CartScreen from './CartScreen'
import OrderHistoryScreen from './OrderHistoryScreen';
import MoreScreen from './MoreScreen';

import SignInScreen, {
    EmailPasswordResetScreen,
    SignUpEmailAdditionInfoScreen,
    SignUpPolicyScreen
} from './SignInScreen';

import AddressScreen, {
    AppendAddressScreen,
    SearchAddressScreen
} from './AddressScreen';

import PhoneScreen from './PhoneScreen';






const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const HomeStack = createStackNavigator(
    {
        HomeScreen,
        CategoryDetailScreen,
        ItemSearchScreen
    },
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            headerShown: false,
        },
        navigationOptions: {
            transitionSpec: {
                open: config,
                close: config
            }
        }
    }
);

const CartStack = createStackNavigator(
    {
        CartScreen
    },
    {
        initialRouteName: 'CartScreen',
        defaultNavigationOptions: {
            headerShown: false
        }
    }
)

const OrderHistoryStack = createStackNavigator(
    {
        OrderHistoryScreen
    },
    {
        initialRouteName: 'OrderHistoryScreen',
        defaultNavigationOptions: {
            headerShown: false
        }
    }
)

const MoreStack = createStackNavigator(
    {
        MoreScreen
    },
    {
        initialRouteName: 'MoreScreen',
        defaultNavigationOptions: {
            headerShown: false
        }
    }
)

const MainBottomTab = createBottomTabNavigator(
    {
        HomeStack,
        CartStack,
        // OrderHistoryStack,
        MoreStack
    },
    {
        initialRouteName: 'HomeStack',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName: string = '';
                if (routeName === 'HomeStack') {
                    iconName = 'home'
                } else if (routeName === 'CartStack') {
                    iconName = 'shopping-cart'
                } else if (routeName === 'MoreStack') {
                    iconName = 'dots-three-horizontal'
                }
                return <Icon name={iconName} size={32} color='white' />;
            },
        }),
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: color1,
                height: headerHeight
            }
        }
    }
);

const SignStack = createStackNavigator(
    {
        SignInScreen,
        SignUpEmailAdditionInfoScreen,
        SignUpPolicyScreen,
        EmailPasswordResetScreen
    },
    {
        initialRouteName: 'SignInScreen',
        defaultNavigationOptions: {
            headerShown: false
        }
    }
)

const AddressStack = createStackNavigator(
    {
        AddressScreen,
        AppendAddressScreen,
        SearchAddressScreen
    },
    {
        initialRouteName: 'AddressScreen',
        defaultNavigationOptions: {
            headerShown: false
        }
    }
)

const PhoneStack = createStackNavigator(
    {
        PhoneScreen
    },
    {
        initialRouteName: 'PhoneScreen',
        defaultNavigationOptions: {
            headerShown: false
        }
    }
)


const MainStack = createStackNavigator(
    {
        MainBottomTab,
        SignStack,
        AddressStack,
        PhoneStack
    },
    {
        initialRouteName: 'MainBottomTab',
        defaultNavigationOptions: {
            headerShown: false
        },

    }
)

export default createAppContainer(MainStack)