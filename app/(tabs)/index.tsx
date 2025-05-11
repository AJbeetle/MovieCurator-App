import { Text, View , Image, ScrollView, ActivityIndicator, FlatList} from "react-native";
import {Link} from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";

import {useRouter} from "expo-router"
import { fetchPopularMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import MovieCard from "@/components/movieCard"
export default function Index() {
  const router = useRouter();

  const { data: movies, loading:moviesLoading, error:moviesError} = useFetch(()=>fetchPopularMovies({query:""}))

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    // <View className="flex-1 justify-center items-center">
    //   <Text className="text-5xl text-accent font-bold ">Welcome</Text>
    //   <Text className="text-light-300">Aayushi</Text>
    // </View>
    <View className="flex flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0"/>
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight:"100%", paddingBottom:10}}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
        {
          moviesLoading ? (<ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center"/>)
          : moviesError ? (
            <Text>Error : {moviesError?.message}</Text>
          ) : (
            <View className="flex-1 w-full h-full mt-5 ">
              <SearchBar
                onPress={()=>router.push("/search")}
                placeholder={"Search for a movie"}
              ></SearchBar>

              <>
                <Text className="text-lg text-white font-bold mt-5 mb-3"> Latest Movies</Text>
                <FlatList
                  data={movies}
                  renderItem={({item}) => (
                    // <Text className="text-white text-sm">{item.title}</Text>
                    <MovieCard 
                      {...item}
                    />
                  )}
                  keyExtractor = {(item) => item.id.toString()}
                  numColumns={3}
                  columnWrapperStyle={{
                    justifyContent:"flex-start",
                    gap:20,
                    paddingRight:5,
                    marginBottom:10
                  }}
                  className="mt-2 pb-32"
                  scrollEnabled={false}
                  
                />
              </>
        </View>
          )
        }
        
      </ScrollView>
    </View>
  );
}


// number of screens we have to make for this project :-
/*  
    1. Home Screen
    2. Search Screen
    3. Details Screen
    4. Favourites/Saved/Bookmarked Screen
    5. Profile Screen
    We only wanna show tab navigation for only 1,2,4,5 as detailed page will be viewed by clicking on the movie image

    So, tab navigation is provided by expo : by route grouping :-
    GROUPS  : you can prevent a segment from showing in the URL by using the group sytnax
    app/root/home matches routes : app/route/home
    app/(root)/home matches routes : app/home


*/ 