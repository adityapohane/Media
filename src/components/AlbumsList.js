import React from 'react'
import { useAddAlbumMutation, useFetchAlbumsQuery  } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumListItem from './AlbumListItem';

const AlbumsList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user); 
  const [addAlbum, result] = useAddAlbumMutation();

 
  const handleClick = () => {
    addAlbum(user);
  }

  let content;
  if (isFetching) {
    content = <Skeleton className='h-10 w-full' times={3} />
  } else if(error){
    content = <div>Error loading data</div>
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>
      return <AlbumListItem key={album.id} album={album} />
    });
  }
  
  
  return (
    <div>
      <div className='m-2 flex flex-row items-center justify-between'>
        <h3 className="text-lg font-bold"> AlbumsList for {user.name}</h3>
        <Button loading={result.isLoading} onClick={handleClick}>+ Add Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList