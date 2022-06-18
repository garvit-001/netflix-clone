import React , { useState, useEffect } from 'react';
import axios from 'axios';
import requests from './Requests';
import './Banner.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Banner() {

    const [movie, setMovie] =  useState([]);
    const [trailerurl, setTrailerurl] = useState("");

    useEffect(() => {
      
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        } fetchData();
        
    }, [])
    
    // console.log(movie);

    function truncate(str ,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    };


    const opts = {
        height: "350",
        width: "90%",
        playerVars: {
            autoplay :1,
        },
    };

    const handleClick = (movie) =>{
        if (trailerurl) {
            setTrailerurl('');
        }
        else{
            movieTrailer(movie?.name || "")
            .then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerurl(urlParams.get('v')) ;
            })  
            .catch((error) =>console.log(error));
        }
    };



  return (
    <div>
    <header className='banner'
        onClick={() =>
            setTrailerurl("")
        }
        style = {{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
        >
        <div className='banner_contents'>
            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
                <div className='banner_buttons'>
                    <button className='banner_button'
                        onClick = {() => handleClick(movie)}>
                        Play
                    </button> 
                    <button className='banner_button'>
                        My List
                    </button> 
                </div> 
            <h1 className='banner_desc'>

                {truncate(movie?.overview , 200)}
            </h1>

            
        </div>
        <div className='banner_fadebottom' />
        </header>
        
        {/* background image */}
        {/* title */}
        {/* 2 buttons */}
        {/* description */}
    

        {trailerurl && <YouTube videoId = {trailerurl} opts = {opts} />}
        
    </div>
  )
}

export default Banner;