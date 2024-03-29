const API_KEY = "300a4f87337a3e4d35c1ca9646455f08";

// const requests = {
//     fetchTrending  : `/Trending/all/week?api_key =${API_KEY}&language=en-US`,
//     fetchNetflixOriginals : `/discover/tv?api_key = ${API_KEY}&with_networks=213`,
//     fetchTopRated : `/movie/top_rated?api_key = ${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movies?api_key = ${API_KEY}&with_genres = 28`,
//     fetchComedyMovies : `/discover/movies?api_key = ${API_KEY}&with_genres = 35`,
//     fetchHorrorMovies : `/discover/movies?api_key = ${API_KEY}&with_genres = 27`,
//     fetchRomanticMovies : `/discover/movies?api_key = ${API_KEY}&with_genres = 10749`,
//     fetchDocumentries : `/discover/movies?api_key = ${API_KEY}&with_genres = 99`,
//     // fetchMovie : https://api.themoviedb.org/3/movie/550?api_key=300a4f87337a3e4d35c1ca9646455f08,

// }


const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumantaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
  };

export default requests;