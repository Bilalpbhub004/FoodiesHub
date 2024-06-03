import React from 'react'
import CustomImage from './CustomImage'
import img1 from "../assets/gallery/img_1.jpg"
import img2 from "../assets/gallery/img_2.jpg"
import img3 from "../assets/gallery/img_3.jpg"
import img4 from "../assets/gallery/img_4.jpg"
import img5 from "../assets/gallery/img_5.jpg"
import img6 from "../assets/gallery/img_6.jpg"
import img7 from "../assets/gallery/img_7.jpg"
import img8 from "../assets/gallery/img_8.jpg"
import img9 from "../assets/gallery/img_9.jpg"
export default function HeroSection() {
    const images = [
        {
            src: img1,
            alt: "img"
        },
        {
            src: img2,
            alt: "img"
        },
        {
            src: img3,
            alt: "img"
        },
        {
            src: img4,
            alt: "img"
        },
        {
            src: img5,
            alt: "img"
        },
        {
            src: img6,
            alt: "img"
        },
        {
            src: img7,
            alt: "img"
        },
        {
            src: img8,
            alt: "img"
        },
        {
            src: img9,
            alt: "img"
        },



    ]
    return (
        <div className='section hero'>
            <div className='col typography'>
                <h1 className='title'>What Are We About</h1>
                <p className='info'>FoodiesHub is a place where you can please your soul & tummy with delicious</p>
                <button className='btn'>Explore Now</button>
            </div>
            <div className='col gallery'>
                {images.map((img, i) => (
                    <CustomImage key={i} pt={"90%"} imgSrc={img.src} alt={img.alt} />
                ))}
            </div>
        </div>
    )
}
