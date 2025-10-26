import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Showcase = () => {
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    useGSAP(() => {
            if (!isTablet) {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#showcase",
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                        pin: true,
                        scroller: window,
            },
                });

                timeline
                    .to(".mask img", {
                        scale: 1.05, // subtle zoom instead of huge matrix
                        ease: "power1.out",
                    })
                    .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
            }
        },
        [isTablet]
    );

    return (
        <section id="showcase" className="relative min-h-[150vh] overflow-hidden">
            <div className="media relative overflow-hidden">
                <video
                    src="/videos/game.mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="w-full object-cover object-center"
                />
                <div className="mask absolute top-0 h-full overflow-hidden">
                    <img
                        src="/mask-logo.svg"
                        className="h-full w-full object-cover scale-100"
                        alt="Mask"
                    />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    M4, the next generation of Apple silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                It drives Apple Intelligence on iPad pro, so you can write,create, and accomplish more with ease. All in a design that's unbelievably thin,light, and powerful.
                            </p>
                            <p>
                                A brand-new display engine delivers breathtaking precision,color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
                            </p>
                            <p className="text-primary">Learn more about Apple Intelligence </p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14 ">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x faster</h3>
                            <p>pro rendering performance than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
