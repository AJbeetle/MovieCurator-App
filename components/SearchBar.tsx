import {View, Text, Image, TextInput} from "react-native"
import React from "react"
import { icons } from "@/constants/icons"

interface Props {
    onPress?: () => void;
    placeholder:string; 
    value:string;
    onChangeText?: (text:string) => void;
}

const SearchBar = ({onPress, placeholder, value, onChangeText}:Props) => {
    return (
        <View className="flex flex-1 flex-row items-center justify-start h-16 px-6 border border-solid border-[#0f0D23] rounded-full bg-[#0f0D23] overflow-hidden">
            <Image source={icons.search} className="size-5 mr-2" resizeMode="contain" tintColor="#ab8bff" />
            <TextInput 
                onPress={onPress} 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor="#a8b5db"
                className="text-white w-full "
            ></TextInput>
        </View>
    )
}

export default SearchBar