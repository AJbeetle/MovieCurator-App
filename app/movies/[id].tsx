import {View, Text} from "react-native"
import React from "react"
import { useLocalSearchParams } from "expo-router"

const movieDetails = () => {
    const {id} = useLocalSearchParams()
    return (
        <View  className="flex flex-1 justify-center items-center">
            <Text> This is movieDetails : {id} </Text>
        </View>
    )
}

export default movieDetails