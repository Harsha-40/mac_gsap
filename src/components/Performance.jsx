import {performanceImages} from "../constants/index.js";

const Performance = () => {
    return (
        <section id="performace">
            <h2>Next-level graphics performance. Game on.</h2>

            <div className="wrapper">
                {performanceImages.map(({id, src}) => (
                    <img key={id} src={src} alt={id} />
                ))}
            </div>
        </section>
    )
}
export default Performance
