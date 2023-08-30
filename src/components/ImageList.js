import './ImageList.css'

import React from 'react'
import ImageShow from './ImageShow'
export default function ImageList({images}) {
const renderedImages=images.map((image)=>{
  return(
    <div>
  <ImageShow key={image.id} image={image}/>
    </div>
  )
});

  return (
    <div className='image-list'>{renderedImages}</div>
  )
}
