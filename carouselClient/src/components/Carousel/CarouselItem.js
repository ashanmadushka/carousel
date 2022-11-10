import React from 'react'
import './CarouselItem.css'

const CarouselItem = (props) => {
    return (
        <div class="container">
            <img src={props?.image} title="placeholder" />
            <div class="text-block">
            <h1>{props?.title}</h1>
            <h2>{props?.subTitle}</h2>
            </div>
        </div>
    )
}

export default CarouselItem