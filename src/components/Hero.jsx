import {useEffect, useRef} from "react";

const Hero = () => {
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
        }, []);
    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBook Title" />
                <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>
                <button>Buy</button>
                <p>From ₹169900.00* or ₹13325.00/mo. for 12 mo.</p>
            </div>
        </section>
    )
}
export default Hero
