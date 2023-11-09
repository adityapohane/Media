import React from 'react'
import { useRemovePhotoMutation } from '../store'
import { GoX } from 'react-icons/go'

const PhotosListItem = ({ photo }) => {
  const [removePhoto] = useRemovePhotoMutation();
  const handleRemovePhoto = () => {
    removePhoto(photo);
  }
  return (
    <div onClick={handleRemovePhoto}  className='relative cursor-pointer m-2 '>
      <img className="h-20 w-20" src={photo.url} alt='rendom' />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-300 opacity-0 hover:opacity-80">
        <GoX className='text-3xl'/>
      </div>
    </div>
  )
}

export default PhotosListItem