import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { color1, headerHeight } from '..//components/style';
import Icon from 'react-native-vector-icons/AntDesign'
import { fromLeft, fromRight, flipX, fadeIn, fromBottom, fromTop } from 'react-navigation-transitions';

import HomeScreen, {
    CategoryDetailScreen
} from './HomeScreen';

import CartScreen from './CartScreen'
import OrderHistoryScreen, {
    OrderHistoryDetailScreen
} from './OrderHistoryScreen';
import MoreScreen from './MoreScreen';

import SignInScreen, {
    SignUpPolicyScreen,
    PolicyDetailScreen
} from './SignInScreen';

import AddressScreen, {
    AppendAddressScreen,
    SearchAddressScreen
} from './AddressScreen';

import PhoneScreen from './PhoneScreen';

import ItemSearchScreen, {
    ItemSearchedScreen,
} from './ItemSearchScreen'




const HomeStack = createStackNavigator(
    {
        HomeScreen,
        CategoryDetailScreen
    },
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            headerShown: false,
        },
        transitionConfig: () => fromRight()
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
        },
        transitionConfig: () => fromRight()
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
        },
        transitionConfig: () => fromRight()
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
        },
        transitionConfig: () => fromRight()
    }
)

const MainBottomTab = createBottomTabNavigator(
    {
        HomeStack,
        CartStack,
        OrderHistoryStack,
        MoreStack
    },
    {
        initialRouteName: 'HomeStack',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName: string = '';
                let size = 28;
                if (routeName === 'HomeStack') {
                    iconName = 'home'
                } else if (routeName === 'CartStack') {
                    iconName = 'shoppingcart'
                } else if (routeName === 'OrderHistoryStack') {
                    iconName = 'bars'
                } else if (routeName === 'MoreStack') {
                    iconName = 'ellipsis1'
                }
                return <Icon name={iconName} size={size} color={focused ? '#000' : '#00000080'} />;
            },
        }),
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: 'white',
                height: headerHeight,
                borderTopColor: '#dbdbdb',
                borderTopWidth: 0.5,
            }
        },
    }
);

const SignStack = createStackNavigator(
    {
        SignInScreen,
        SignUpPolicyScreen,
        PolicyDetailScreen
    },
    {
        initialRouteName: 'SignInScreen',
        defaultNavigationOptions: {
            headerShown: false
        },
        transitionConfig: () => fromRight()
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
        },
        transitionConfig: () => fromRight()
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
        },
    }
)

const ItemSearchStack = createStackNavigator(
    {
        ItemSearchScreen,
        ItemSearchedScreen
    },
    {
        initialRouteName: 'ItemSearchScreen',
        defaultNavigationOptions: {
            headerShown: false
        },
        transitionConfig: () => fromRight()
    }
)


const MainStack = createStackNavigator(
    {
        MainBottomTab,
        SignStack,
        AddressStack,
        PhoneStack,
        ItemSearchStack,
        OrderHistoryDetailScreen
    },
    {
        initialRouteName: 'MainBottomTab',
        defaultNavigationOptions: {
            headerShown: false
        },
        transitionConfig: () => fromRight()
    }
)

export default createAppContainer(MainStack)