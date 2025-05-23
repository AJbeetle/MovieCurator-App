import {View, Text, Image, FlatList, ActivityIndicator} from "react-native"
import React, {useState, useEffect} from "react"
import { images } from "@/constants/images"
import useFetch from "@/services/useFetch"
import { fetchPopularMovies } from "@/services/api"
import { useRouter } from "expo-router"
import MovieCard from "@/components/movieCard"
import { icons } from "@/constants/icons"
import SearchBar from "@/components/SearchBar"


const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { data: movies, loading:moviesLoading, error:moviesError, refetch: loadMovies, reset} = useFetch(()=>fetchPopularMovies({query:searchQuery}), false)

    useEffect(function(){
        // debouncing search query : reducing too many api calls

        // const func = async() => {
        //     if(searchQuery.trim()){
        //         await loadMovies();
        //     }
        //     else{
        //         reset()
        //     }
        // }

        const debounceFunc = setTimeout(async() => {
            console.log("Debounced Query : ",searchQuery)
            if(searchQuery.trim()){
                await loadMovies();
            }
            else{
                reset()
            }
        },1000);
        // func();
        // console.log(searchQuery)

        return function(){
            clearTimeout(debounceFunc)
        }
    },[searchQuery])

    return (
        <View className="flex flex-1 bg-primary">
            <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode=
            "cover"
            />

            <FlatList 
                data = {movies}
                renderItem={({item}) => <MovieCard {...item}/>}
                keyExtractor={(item)=> item.id.toString()}
                className="px-5"
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent:"center",
                    gap:16,
                    marginVertical:16
                }}
                contentContainerStyle={{paddingBottom:100}}
                ListHeaderComponent={
                    <>
                      <View className="w-full flex-row justify-center mt-20">
                        <Image source={icons.logo} className="w-12 h-10"/>
                      </View>  

                      <View className="my-5 h-16">
                        <SearchBar 
                            placeholder={"Search movies ..."}
                            value={searchQuery}
                            onChangeText={(text:string) => setSearchQuery(text)}
                        />
                      </View>

                      {
                        moviesLoading && <ActivityIndicator size="large" color="#0000ff" className="my-3"/>
                      }

                      {
                        moviesError && (
                            <Text className="text-red-500 px-5 my-3 h-16">
                                Error : {moviesError.message}
                            </Text>
                        )
                      }

                      {
                        !moviesLoading && !moviesError && searchQuery.trim() && movies?.length > 0 &&
                        <Text className="text-xl text-white font-bold h-16">
                            Search Results for {' '}
                            <Text className="text-accent">
                                {searchQuery}
                            </Text>
                        </Text> 
                      }
                    </>
                }
                ListEmptyComponent={
                    !moviesLoading && !moviesError ? (
                        <View className="m-10 px-5">
                            <Text className="text-center text-gray-500">
                                {searchQuery.trim() ? "No Movies found" : "Search for a movie"}
                            </Text>
                        </View>
                    ) : null
                }
            />
        </View>
    )
}

export default Search