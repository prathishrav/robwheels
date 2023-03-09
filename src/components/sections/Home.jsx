import React from 'react';

function Home(props) {

    
    let mouseMove =(e)=>{
        document.querySelectorAll('.home-parallax').forEach(elm => {

            let speed = elm.getAttribute('data-speed');

            let x = (window.innerWidth - e.pageX * speed) / 90;
            let y = (window.innerHeight - e.pageY * speed) / 90;

            elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

        });
    }

let mousLeave =()=>{
    document.querySelectorAll('.home-parallax').forEach(elm => {

        elm.style.transform = `translateX(0px) translateY(0px)`;

    });
}
    return (
        <>
            <section className="home" onMouseLeave={mousLeave} onMouseMove={(e)=>{mouseMove(e)}} id="home">

                <h3 data-speed="-2" className="home-parallax">join the auction</h3>

                <img data-speed="5" className="home-parallax" src="/assets/reviews/main2.png" alt="" />

                <a data-speed="7" href="/" className="btn home-parallax">explore bikes</a>

            </section>
        </>
    );
}

export default Home;