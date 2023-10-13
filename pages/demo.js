// import React from 'react';
// import imagen from './pages/api/imagen.jpg';
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
        top: '100px',
        left: '150px',
      };
    
      const imageStyle2 = {
        position: 'absolute',
        top: '370px',
        left: '150px',
      };

      const imageStyle3 = {
        position: 'absolute',
        top: '100px',
        left: '400px',
      };
    
      const imageStyle4 = {
        position: 'absolute',
        top: '370px',
        left: '400px',
      };

      const imageStyle5 = {
        position: 'absolute',
        top: '100px',
        left: '650px',
      };

      const imageStyle6 = {
        position: 'absolute',
        top: '370px',
        left: '650px',
      };

      const imageStyle7 = {
        position: 'absolute',
        top: '100px',
        left: '900px',
      };

      const imageStyle8 = {
        position: 'absolute',
        top: '370px',
        left: '900px',
      };

      const imageStyle9 = {
        position: 'absolute',
        top: '100px',
        left: '1150px',
      };

      const imageStyle10 = {
        position: 'absolute',
        top: '370px',
        left: '1150px',
      };

      const imageStyle11 = {
        position: 'absolute',
        top: '100px',
        left: '30px',
      };

      const imageStyle12 = {
        position: 'absolute',
        top: '200px',
        left: '30px',
      };

      const imageStyle13 = {
        position: 'absolute',
        top: '300px',
        left: '30px',
      };

      const imageStyle14 = {
        position: 'absolute',
        top: '400px',
        left: '30px',
      };

      const imageStyle15 = {
        position: 'absolute',
        top: '500px',
        left: '30px',
      };
      const caja = {
        position: 'absolute',
        top: '50px',
        left: '100px',
      };
 
      const h1Style = {
        fontSize: '2em',
        textAlign: 'center', // Centra el texto del catálogo
      };

    return (
        <div>
          <Link
            href={{
                pathname: '/',
            }}
          >
            <Image
              src="/img/24.jpg" style={imageStyle11} 
              width={75}
              height={75}
              alt="Fondo"
            />
          </Link>
                 <Image
                    src="/img/25.png" style={imageStyle12} 
                    width={75}
                    height={75}
                    alt="Fondo"
                />
     <Image
                    src="/img/26.png" style={imageStyle13} 
                    width={75}
                    height={75}
                    alt="Fondo"
                />

<Image
                    src="/img/27.png" style={imageStyle14} 
                    width={75}
                    height={75}
                    alt="Fondo"
                />

<Image
                    src="/img/28.png" style={imageStyle15} 
                    width={75}
                    height={75}
                    alt="Fondo"
                />

             <h1 className="text-white font-bold" style={h1Style}>Catalogo</h1>
            <Link
                href={{
                    i: 0,
                    pathname: '/pago',
                    query: { name: 'manzana' },
                }}
            >
                <Image
                    src="/img/01.png" style={imageStyle1} 
                    width={200}
                    height={200}
                    alt="Fondo"
                />
            </Link>

            <Link
                href={{
                  i: 1,
                    pathname: '/pago',
                    query: { name: 'Fresa' },
                }}
            >
<Image
      src="/img/02.png" style={imageStyle2}
      width={200}
      height={200}
      alt="Fondo"
    />
 </Link>
 
 <Link
                href={{
                  i: 3,
                    pathname: '/pago',
                    query: { name: 'Pan' },
                }}
            >
<Image
      src="/img/03.png" style={imageStyle3}
      width={200}
      height={200}
      alt="Fondo"
    />
</Link>

<Link
                href={{
                  i: 2,
                    pathname: '/pago',
                    query: { name: 'Llave' },
                }}
            >
<Image
      src="/img/04.png" style={imageStyle4}
      width={200}
      height={200}
      alt="Fondo"
    />
</Link>

<Link
                href={{
                  i: 4,
                    pathname: '/pago',
                    query: { name: 'Platano' },
                }}
            >
<Image
      src="/img/05.png" style={imageStyle5}
      width={200}
      height={200}
      alt="Fondo"
    />
</Link>

<Link
                href={{
                  i: 5,
                    pathname: '/pago',
                    query: { name: 'Chile' },
                }}
            >
<Image
      src="/img/06.png" style={imageStyle6}
      width={200}
      height={200}
      alt="Fondo"
    />
</Link>
<Link
                href={{
                  i: 6,
                    pathname: '/pago',
                    query: { name: 'Limon' },
                }}
            >
<Image
      src="/img/07.png" style={imageStyle7}
      width={200}
      height={200}
      alt="Fondo"
    />
</Link>
<Link
                href={{
                  i: 7,
                    pathname: '/pago',
                    query: { name: 'Moneda' },
                }}
            >
<Image
      src="/img/08.png" style={imageStyle8}
      width={200}
      height={200}
      alt="Fondo"
    />
</Link>
<Link
                href={{
                  i: 8,
                    pathname: '/pago',
                    query: { name: 'Esmeralda' },
                }}
            >
<Image
      src="/img/09.png" style={imageStyle9}
      width={200}
      height={200}
      alt="Fondo"
    />
</Link>
<Link
                href={{
                  i: 9,
                    pathname: '/pago',
                    query: { name: 'Caja' },
                }}
            >
<Image
      src="/img/10.png" style={imageStyle10}
      width={200}
      height={200}
      alt="Fondo"
    />
    </Link>
<div className="text-white font-bold"
>   Búsqueda:</div>
       
<input type="text" placeholder="Buscar..." style={caja}/>

        </div>


        
    );
}