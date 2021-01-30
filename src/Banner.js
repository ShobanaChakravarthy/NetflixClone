import React, { useEffect, useState } from 'react'
import axios from "./axios"
import reqs from "./requests"
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const req= await axios.get(reqs.fetchNetflixOriginals)
            //find a random number and pass it to the array so that everytime the banner will be unique
            const randomNum = Math.floor(Math.random() * req.data.results.length - 1)
            setMovie(req.data.results[randomNum])
        }
        fetchData();
    }, [])

    // truncating the description if it crosses above a particular length
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    const urll = `("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url${urll}`,
                backfroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
                {/* movie image as background */}
                {/* title */}
                <h1 className="banner__title">{movie?.title || movie.name || movie?.original_name} </h1>
                {/* div > 2 buttons Play and MyList */}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                {/* Description */}
                <h1 className="banner__description">
                    {truncate(movie?.overview,150)}
                </h1>
            </div>
            <div className="banner__fadeBottom"/>
        </header>
    )
}

export default Banner
