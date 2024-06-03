import React from 'react'
import img10 from "../assets/gallery/img_10.jpg"
const ImproveSkill = () => {

    const lists = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]
    return (
        <div className='section improve-skills'>
            <div className='col img'>
                <img src={img10} alt="img" />
            </div>
            <div className='col typography'>
                <h1 className='title'>Improve Your Culinary Skills</h1>
                {lists.map((item, i) => (
                    <p className='skill-item' key={i}>{item}</p>

                ))}
                <button className='btn'>Signup Now</button>
            </div>

        </div>
    )
}

export default ImproveSkill
