import { StackActions, NavigationActions } from 'react-navigation';

export const reset2HomeAndAddress = StackActions.reset({
    index: 1,
    key: null,
    actions: [
        NavigationActions.navigate({ routeName: 'MainBottomTab' }),
        NavigationActions.navigate({ routeName: 'AddressStack' }),
    ],
});

export const reset2SignIn = StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: 'SignStack' })],
});

export const reset2OrderResultScreen = StackActions.reset({
    index: 1,
    key: null,
    actions: [
        NavigationActions.navigate({ routeName: 'MainBottomTab' }),
        NavigationActions.navigate({ routeName: 'OrderResultScreen' }),
    ],
});