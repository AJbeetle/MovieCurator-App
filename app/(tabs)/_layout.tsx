import {View, Text, ImageBackground, Image} from "react-native"
import React from "react"

import {Tabs} from "expo-router"
import { images } from "@/constants/images"
import { icons } from "@/constants/icons"


const TabIcon = (props:{name:String, icon:any, focused:boolean}) => {
    return (
        <View>
        {
            props.focused==true ? 
            <ImageBackground source={images.highlight} className="flex flex-col w-full min-w-[90px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden">
                <Image source={props.icon} tintColor="#151312" className="size-5"/>
                <Text className="text-secondary font-semibold">{props.name}</Text>
            </ImageBackground> : 
            <View className="flex flex-col w-full min-w-[90px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden">
                <Image source={props.icon} tintColor="#A8B5DB" className="size-5"/>
                <Text className="text-light-100 font-semibold">{props.name}</Text>
            </View>
        }
        </View>
        
    )
}

const _Layout = () => {
    return (
        <Tabs screenOptions={{
                tabBarShowLabel:false,
                tabBarItemStyle: {
                    width:'100%',
                    height:'100%',
                    justifyContent:'center',
                    alignItems:'center', 
                },
                tabBarStyle : {
                    backgroundColor:"#0f0D23",
                    borderRadius : 50,
                    marginHorizontal:20,
                    marginBottom:36,
                    height:52,
                    position:'absolute',
                    overflow:'hidden',
                    borderWidth:1,
                    borderColor:"0f0d23"
                }
            }}
        >
            
            <Tabs.Screen  
                name = "index"
                options = {
                    {
                        title : "Home",
                        headerShown : false,
                        tabBarIcon : ({ focused }) => (
                            <>
                              <TabIcon name={"Home"} icon={icons.home} focused={focused}></TabIcon>
                            </>
                        )
                    }
                }
            />
            <Tabs.Screen 
                name = "search"
                options = {
                    {
                        title : "Search",
                        headerShown : false,
                        tabBarIcon : ({ focused }) => (
                            <>
                              <TabIcon name={"Search"} icon={icons.search} focused={focused}></TabIcon>
                            </>
                        )
                    }
                }
            />
            <Tabs.Screen 
                name = "saved"
                options = {
                    {
                        title : "Saved",
                        headerShown : false,
                         tabBarIcon : ({ focused }) => (
                            <>
                              <TabIcon name={"Saved"} icon={icons.save} focused={focused}></TabIcon>
                            </>
                        )
                    }
                }
            />
            <Tabs.Screen 
                name = "profile"
                options = {
                    {
                        title : "User",
                        headerShown : false,
                         tabBarIcon : ({ focused }) => (
                            <>
                              <TabIcon name={"User"} icon={icons.person} focused={focused}></TabIcon>
                            </>
                        )
                    }
                }
            />

        </Tabs>
    )
}

export default _Layout