
export const TMBD_CONFIG = {
    BASE_URL : "https://api.themoviedb.org/3",
    API_KEY : process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers : {
        accept : "application/json",
        authorization : `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchPopularMovies = async({query}:{query:string}) => {
    const endpoint = query ? `${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
    : `${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

    const response = await fetch(endpoint,{
        method : "GET",
        headers : TMBD_CONFIG.headers,
    })

    if (!response.ok){
        //@ts-ignore
        throw new Error("Failed to fetch movies", response.statusText);
    }

    const data = await response.json();
    return data.results; 
}



// const url = 'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGE4YzYyMmU3NjcyZTk0YWNjN2MwNjZmNmU3NTdmMSIsIm5iZiI6MTc0Njk3MzE2Ny4zMjksInN1YiI6IjY4MjBiMWVmYWZjOTY2NGQ4NTVhMjY0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HxDsqlMsdA0ZDo6_T2lM8DPhpd2MGxqM8FIL28mfnlY'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));