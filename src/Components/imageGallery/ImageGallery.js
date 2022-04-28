import React from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import Gallery  from 'react-image-gallery'
import './ImageGallery'
const ImageGallery=(props)=> {
const imageList=props?.images?.map((image,i)=>{
    return {
        original:image,
        thumbnail:image,
        key:{i}
    }
})
  return (
    <div>
        <Gallery items={imageList} showBullets showThumbnails={false} />
    </div>
  )
}

export default ImageGallery
