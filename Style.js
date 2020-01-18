import {Dimensions, StyleSheet} from 'react-native'


export default {
    tabBarOptions: {
        style: {
            backgroundColor: '#9c4747' 
        }, // 982222 = more red
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
            backgroundColor: '#d5d1b1'
        },
        activeTintColor: '#eae1d0',
        inactiveTintColor: '#e1c0a9',
    },
    tabBarIconsColor: '#d5d1b1',
    slide1: {
        container: {
            backgroundColor: '#73978c',
            flex: 1,
        },
        circle: {
            backgroundColor: '#86b0a3',
            height: Dimensions.get('window').width*1.25,
            width: Dimensions.get('window').width*1.25,
            borderRadius: Dimensions.get('window').width*1.25/2,
            position: 'absolute',
            left: -Dimensions.get('window').width*1.25/5,
            top: -Dimensions.get('window').width*1.25/10,
        },
        image: {
            width: 100,
            height: 100,
            alignSelf: 'center',
        }
    },
    slides: {
        header: {
            fontWeight: 'bold',
            fontSize: 30,
            color: '#3e3b44',
            marginLeft: 20,
            marginTop: 32,
        },
        play: {
            width: 70,
            height: 70,
            borderRadius: 70 / 2,
            backgroundColor: '#455750',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
}