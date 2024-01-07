import React from "react";
import { View, Text, Image } from 'react-native';
import Style from '../services/appStyle';

const GameCard = ({item}) => {
    return (
        <>
            <View style={Style.card}>
                <Image style={Style.game_image} 
                source={{uri: item.background_image}} />
            </View>
        </>
    )
}

export default GameCard;