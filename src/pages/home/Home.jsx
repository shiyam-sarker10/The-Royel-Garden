
import NewsLetter from "../../component/newsLetter/newsLetter";
import ParallaxImagery from "../../component/parallaxImagery/ParallaxImagery";
import Review from "../../component/review/Review";
import SpacialOffer from "../../component/specialOffer/SpacialOffer";



const Home = () => {
    return (
        <div>
            <ParallaxImagery></ParallaxImagery>
            <Review></Review>
            <NewsLetter></NewsLetter>
            <SpacialOffer></SpacialOffer>
        </div>
    );
};

export default Home;