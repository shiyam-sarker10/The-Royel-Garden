
import { useEffect } from "react";
import NewsLetter from "../../component/newsLetter/newsLetter";
import ParallaxImagery from "../../component/parallaxImagery/ParallaxImagery";
import Review from "../../component/review/Review";
import SpacialOffer from "../../component/specialOffer/SpacialOffer";



const Home = () => {
    useEffect(() => {
      document.title = "The Royal Garden - Home";
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <ParallaxImagery></ParallaxImagery>
            <Review></Review>
            <NewsLetter></NewsLetter>
            <SpacialOffer></SpacialOffer>
        </div>
    );
};

export default Home;