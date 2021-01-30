import React, { useEffect, useState } from 'react';
import axios from "./axios"
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL="https://image.tmdb.org/t/p/original/"

function Row({title,fetchURL,isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");
    // a snippet of code which runs based on a specific condition or variable
    useEffect(() => {
        async function fetchData(){
            const req=await axios.get(fetchURL)
            setMovies(req.data.results)
            return req;
        }
        fetchData();

    }, [fetchURL])
    //console.table(movies);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay:1,
        }
    }

    const handleClick = (movie) =>{
        if(trailerURL){
            setTrailerURL("")
        }else{
            // movieTrailer(movie?.name || "")
            // .then(url => {
            //     //https://www.youtube.com/watch?v=XtMThy
            //     //this url search is used to take the value after question mark
            //     const urlParms = new URLSearchParams(new URL(url).search);
            //     setTrailerURL(urlParms.get("v"))
            // })
            // .catch(err => console.log(err))
        }
    }

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            {/* container -> posters */}
            <div className="row__posters">
                {movies.map(movie=>(
                <img
                    key={movie.id}
                    className={`row__poster ${isLargeRow && `row__posterLarge`}`}
                    src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name} 
                    onClick={handleClick(movie)}
                />
                ))}
            </div>
            {/* youtube embed */}
            {/* {trailerURL && <Youtube videoID={trailerURL} opts={opts}/>} */}
            
            <Youtube videoID='op5aHic6uic' opts={opts}/>
            
        </div>
    )
}

export default Row;