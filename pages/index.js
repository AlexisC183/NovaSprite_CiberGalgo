import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const Home = () => {
    useEffect(() => {
        document.body.style.backgroundImage = "url('/FondoInicio.png')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center top";
        document.body.style.backgroundattachment = "fixed";
    }, []);
return (
    <div>
        <h1 style={{ position: "absolute", top:10,  right: 80}} className="font-bold text-white">
                        Contact    |    About us    |    Help
                    </h1>
    <div className="p-0"style={{ position: "relative", zIndex: -1 }}>
            <div
                className="top-0 h-10 w-full bg-black m-0"
            />
            <h2 style={{ position: "absolute",  left: 216}} className="font-bold text-black">
                        Creators
                    </h2>
                    <h3 style={{ position: "absolute",  left: 433}} className="font-bold text-black">
                        Top Teams
                    </h3>
                    <h4 style={{ position: "absolute",  left: 650}} className="font-bold text-black">
                        Top Sprites
                    </h4>
                    <h5 style={{ position: "absolute",  right: 433}} className="font-bold text-black">
                        News
                    </h5>
                    <h6 style={{ position: "absolute",  right: 216}} className="font-bold text-black">
                        Guide
                    </h6>
            <div
                className="h-5 w-full bg-blue-500 m-0"
                style={{ position: "absolute", top: 42, left: 0, right: 0, zIndex: -1 }}
            />
    <a style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
            <Image
                src = "/NovaSprite.png"
                className="m-0"
                height={180}
                width={280}
                alt ="NovaSprites"
            />
            </a>
            <a style={{ position: "absolute", top: 80, left: 80, zIndex: 1 }}>
            <Image
                src = "/NovaSprite.jpg"
                className="m-0"
                height={150}
                width={350}
                alt ="NovaSprite"
            />
            </a>
            <h7 style={{ position: "relative", top: 220, fontSize: 30,  left: 80}} className="font-bold text-white">
                        Mission
                    </h7>
                    <h6 style={{ position: "relative", top: 240, fontSize: 20,  left: 80}} className="font-bold text-white">
                    Empower entrepreneurial digital content creators for video games of all types by<br></br>providing them with high quality digital content and customized solutions that drive<br></br>their success.
                    </h6>
            <a style={{ position: "absolute", top: 0, right: 0, zIndex: 1 }}>
            <Image
                src = "/Usuario.png"
                className="m-0"
                height={35}
                width={35}
                alt ="Usuario"
            />
            </a>
        </div>
            <a href="/sesion">
  <button style={{ position: "absolute", bottom: 20, right: 30, zIndex: 1, borderRadius: "40px", padding: "10px 20px", width: "300px" }} className="bg-blue-500 font-bold text-black">Sign in</button>
</a>
            <a href="/registro">
  <button style={{ position: "absolute", bottom: 80, right: 30, zIndex: 1, borderRadius: "40px", padding: "10px 20px", width: "300px" }} className="bg-blue-500 font-bold text-black">Sign up</button>
</a>
<a style={{ position: "absolute", bottom: 40, left: 40, zIndex: 1 }}>
            <Image
                src = "/PoweradeBySolana.png"
                className="m-0"
                height={60}
                width={180}
                alt ="PoweradeBySolana"
            />
            </a>
</div>  
)}
export default Home;