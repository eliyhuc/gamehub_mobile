import {StyleSheet} from 'react-native'
import Colors from './appColors'

export default StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: Colors.english_violet,
        padding:20
    },
    game_image:{
        width:'100%',
        height:250
    },
    card: {
        width:'100%',
        height:450,
        backgroundColor: Colors.white,
        borderRadius:12,
        marginBottom:20
    }

})