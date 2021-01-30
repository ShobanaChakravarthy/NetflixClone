import React, { useEffect, useState } from 'react'
import "./Nav.css";

function Nav() {
    
    const [show, handleshow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                //handling show
                handleshow(true)
            }else{
                //handling show
                handleshow(false)
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                alt="Netflix logo"
            />
            <img 
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                alt="Profile logo" 
                className="nav__avatar"
            />
        </div>
    )
}

export default Nav
