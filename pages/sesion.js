import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';

export default function Demo() {
  useEffect(() => {
    document.body.style.backgroundImage = "url('/img/gam.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center top";
    document.body.style.backgroundattachment = "fixed";
}, []);

    const imageStyle1 = {
        position: 'absolute',
        top: '80px',
        left: '200px',
      };
      const imageStyle2 = {
        position: 'absolute',
        top: '250px',
        left: '80px',
      };
    
      const imageStyle4 = {
        position: 'absolute',
        top: '250px',
        left: '450px',
      };

      
    return (

        <div>
        

<br></br>
<br></br>
<br></br>
<Image
      src="/img/11.jpeg" style={imageStyle1}
      width={200}
      height={200}
      alt="Fondo"
      

    />
<a style={{ position: "absolute", top: 50, right: 200, zIndex: 1 }}>
<Image
      src="/img/30.png" 
      width={100}
      height={100}
      alt="Fondo"
    />
    </a>

<a style={{ position: "absolute", top: 150, right: 220, zIndex: 1 }}>
    <div className="text-white font-bold"
>   PROFILE</div>
       

</a>

<a style={{ position: "absolute", top: 220, right: 150, zIndex: 1 }}>
    <div className="text-white font-bold"
>   Username:</div>
       
<input type="text"/>
</a>

<a style={{ position: "absolute", top: 300, right: 150, zIndex: 1 }}>
    <div className="text-white font-bold"
>   Password:</div>
       
<input type="password"/>
</a>

<a style={{ position: "absolute", top: 450, right: 150, zIndex: 1 }} href="/demo">
    <div className="text-white font-bold"
>   Sign up</div>
</a>
<a style={{ position: "absolute", top: 450, right: 285, zIndex: 1 }} href="/">
    <div className="text-white font-bold"
>   Cancel</div>
</a>
    <Image
      src="/img/21.jpeg" style={imageStyle2}
      width={330}
      height={200}
      alt="Fondo"
    />
 

<Image
      src="/img/22.jpeg" style={imageStyle4}
      width={330}
      height={200}
      alt="Fondo"
    />


<br></br>
<br></br>
<br></br>

<h1 className="text-white font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Elevate your asset creations to new heights, showcase you skills to become an</h1>
<h1 className="text-white font-bold"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;independent developer, harness the power of criptocurrencies for monetization</h1>
<h1 className="text-white font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;forces with other creators with Nova.</h1>

        </div>
    );
}
