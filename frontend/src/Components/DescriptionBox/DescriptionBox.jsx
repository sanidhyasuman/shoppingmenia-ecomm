import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className='descriptionbox-navigator'>
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Review</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ea id nesciunt neque, eveniet eius dolorem. Esse rerum molestiae sunt dicta, sequi cupiditate voluptatum ex, aliquam, quis magnam illum molestias.</p>
            </div>
        </div>
    )
}

export default DescriptionBox
