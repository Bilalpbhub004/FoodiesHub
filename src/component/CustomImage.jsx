import React from 'react'

const CustomImage = ({ imgSrc, pt, alt }) => {
    return (
        <div className='custom-image' style={{ paddingTop: pt }}>
            <img src={imgSrc} alt={alt} />
        </div>
    )
}

export default CustomImage
