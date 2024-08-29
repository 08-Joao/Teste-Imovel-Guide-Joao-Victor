import React from 'react'
import "./assets/style.scss"
import { CommonImageProps } from '../../utils/commonImageProps'

  
const ZoomImage: React.FC<CommonImageProps> = ({ url }) => {
  return (
    <div className='generic__container'>
         <img src={url} className='generic__image zoomImage__image'/>
    </div>
  )
}

export default ZoomImage