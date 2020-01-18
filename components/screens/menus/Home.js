import React from 'react'
import { Image, View, Text, StatusBar, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import globalStyle from '../../../Style'

export default class Home extends React.Component {

    constructor(props){
        super(props);
    }
    

    continue = () => {

        this.props.navigation.push('Game')

    }

    render() {
        return(
            <View style={globalStyle.slide1.container}>
                
                <StatusBar hidden/>
                <View style={globalStyle.slide1.circle}/>


                <View style={{marginTop: 100, marginHorizontal: 32}}>
                
                    <Image source={require('../../../assets/img/NumberGame.png')} style={globalStyle.slide1.image}/>
                    <Text style={globalStyle.slides.header}>Game 1</Text>

                    <View style={{alignItems:'flex-end', marginTop: 64}}>
                        <TouchableOpacity style={globalStyle.slides.play} onPress={this.continue}>
                            <Ionicons name='md-arrow-round-forward' size={24} color='#FFF'/>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        )
    }

}

