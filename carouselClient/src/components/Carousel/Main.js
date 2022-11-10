import React, {useState, useEffect} from 'react'
import CarouselItem from "./CarouselItem"
import Carousel from "./Carousel"
import axios from 'axios'

const baseURL = "http://localhost:3600/api/carousel";

const MainCarousel = (props) => {

    const {slides, Infinite} = props

    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        const url = baseURL + `?slides=${slides}`
        const headers = {
            'Content-Type': 'Access-Control-Allow-Origin'
        };

        axios.get(url, {headers}).then((response) => {
            console.log('response', response)
            setCarouselData(response.data);
        });
    }, [slides, Infinite])

    return (
        <div className="main" style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carousel slides={carouselData.length} Infinite={Infinite}>
            {   carouselData && carouselData.map((data) => {
                    return (<CarouselItem {...data}/>)
                })
            }
            </Carousel>
        </div>
    )
}

export default MainCarousel