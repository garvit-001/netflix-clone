import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title , fetchUrl, isLargeRow}) {
    const [movies, setMovies] =  useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        // if [ ] run once the row loads, and dont run again

        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            // console.log(request);
            return request;
        }fetchData();
    
    }, [fetchUrl]);

    // console.log(movies);
    
    const opts = {
        height: "350",
        width: "90%",
        playerVars: {
            autoplay :1,
        },
    };
    
    const handleClick = (movie) =>{
        if (trailerUrl) {
        setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.name || "")
            .then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v')) ;
            })  
            .catch(error =>console.log(error));
        }
    };

  return (
    <div className='row'>
         <h2>{ title }</h2>

        <div className='row_posters'>
            {/* row_posters */}
            { movies?.map(movie => (
                
                <img 
                    className={`row_poster ${isLargeRow && "row-posterLarge"}`}
                    src= {`${baseUrl}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`} 
                    alt ={movie.name}
                    key = {movie.id}
                    onClick = {()=> handleClick(movie)} 
                />
            ))}
        </div>
        {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts} />}
        {/* container -> posters */}
    </div>
  )
}

export default Row;
