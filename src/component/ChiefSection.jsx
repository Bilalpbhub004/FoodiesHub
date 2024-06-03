import React from 'react';
import ChiefCard from './ChiefCards';
import chiefImg1 from "../assets/top-chiefs/img_1.jpg"
import chiefImg2 from "../assets/top-chiefs/img_2.jpg"
import chiefImg3 from "../assets/top-chiefs/img_3.jpg"
import chiefImg4 from "../assets/top-chiefs/img_4.jpg"
import chiefImg5 from "../assets/top-chiefs/img_5.jpg"
import chiefImg6 from "../assets/top-chiefs/img_6.jpg"


export default function ChiefSection() {
  const chiefs = [
    {
      name: "Juan Carlos",
      img: chiefImg1,
      recipesCount: "10",
      cuisine: "Mexican",
    },
    {
      name: "John Doe",
      img: chiefImg2,
      recipesCount: "05",
      cuisine: "Japanese",
    },
    {
      name: "Erich Maria",
      img: chiefImg3,
      recipesCount: "13",
      cuisine: "Italian",
    },
    {
      name: "Chris Brown",
      img: chiefImg4,
      recipesCount: "08",
      cuisine: "American"
    },
    {
      name: "Blake Lively",
      img: chiefImg5,
      recipesCount: "09",
      cuisine: "French"
    },
    {
      name: "Ben Affleck",
      img: chiefImg6,
      recipesCount: "04",
      cuisine: "Indian"
    }
  ];

  return (
    <div className='section chiefs'>
      <h1 className='title'>Our Top Chiefs</h1>
      <div className='top-chiefs-container'>
        {chiefs.map(chief => (
          <ChiefCard key={chief.name} chief={chief} img={chief.img} />
        ))}
      </div>
    </div>
  );
}
