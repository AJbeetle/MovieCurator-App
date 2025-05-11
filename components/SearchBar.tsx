import {View, Text, Image, TextInput} from "react-native"
import React from "react"
import { icons } from "@/constants/icons"

interface Props {
    onPress ?: () => void;
    placeholder:string; 
}

const SearchBar = ({onPress, placeholder}:Props) => {
    return (
        <View className="flex border border-solid border-yellow-500">
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />
            <TextInput 
                onPress={onPress} 
                placeholder={placeholder}
                value=""
                onChangeText={()=>{}}
                placeholderTextColor="#a8b5db"
                className="flex-1 ml-2 text-white h-10"
            ></TextInput>
        </View>
    )
}

export default SearchBar