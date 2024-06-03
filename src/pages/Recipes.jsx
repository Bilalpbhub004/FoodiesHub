import React from 'react'
import PreviousSearches from '../component/PreviousSearches'
import RecipeCard from '../component/RecipeCard'

//  Food Images
import img1 from "../assets/gallery/img_1.jpg"
import img2 from "../assets/gallery/img_2.jpg"
import img3 from "../assets/gallery/img_3.jpg"
import img4 from "../assets/gallery/img_4.jpg"
import img5 from "../assets/gallery/img_5.jpg"
import img6 from "../assets/gallery/img_6.jpg"
import img7 from "../assets/gallery/img_7.jpg"
import img8 from "../assets/gallery/img_8.jpg"
import img9 from "../assets/gallery/img_9.jpg"
import img10 from "../assets/gallery/img_10.jpg"

// Chief Images
import chiefImg1 from "../assets/top-chiefs/img_1.jpg"
import chiefImg2 from "../assets/top-chiefs/img_2.jpg"
import chiefImg3 from "../assets/top-chiefs/img_3.jpg"
import chiefImg4 from "../assets/top-chiefs/img_4.jpg"
import chiefImg5 from "../assets/top-chiefs/img_5.jpg"
import chiefImg6 from "../assets/top-chiefs/img_6.jpg"

export default function Recipes() {
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: img1,
            authorImg: chiefImg1,
        },
        {
            title: "Spaghetti and Meatballs",
            image: img2,
            authorImg: chiefImg2,
        },
        {
            title: "American Cheese Burger",
            image: img3,
            authorImg: chiefImg3,
        },
        {
            title: "Mutton Biriyani",
            image: img4,
            authorImg: chiefImg4,
        },
        {
            title: "Japanese Sushi",
            image: img5,
            authorImg: chiefImg5,
        },
        {
            title: "Chicken Pan Pizza",
            image: img6,
            authorImg: chiefImg6,
        },
        {
            title: "Spaghetti and Meatballs",
            image: img7,
            authorImg: chiefImg1,
        },
        {
            title: "American Cheese Burger",
            image: img8,
            authorImg: chiefImg3,
        },
        {
            title: "Mutton Biriyani",
            image: img9,
            authorImg: chiefImg2,
        },
        {
            title: "Japanese Sushi",
            image: img10,
            authorImg: chiefImg5,
        },
        {
            title: "American Cheese Burger",
            image: img8,
            authorImg: chiefImg4,
        },
        {
            title: "Mutton Biriyani",
            image: img7,
            authorImg: chiefImg3,
        }
    ].sort(() => Math.random() - 0.5)


    return (
        <div>
            <PreviousSearches />
            <div className='recipes-container'>
                {recipes.map((recipe, i) => (
                    <RecipeCard key={i} recipe={recipe} />
                ))}

            </div>
        </div>
    )
}
