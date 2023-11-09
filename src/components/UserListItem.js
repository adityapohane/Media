import React from 'react';
import Button from './Button';
import { removeUser } from '../store';
import { GoX } from "react-icons/go";
import { useThunk } from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';


const UserListItem = ({ user }) => {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);
    const handleClick = () => {
        doRemoveUser(user);
  }
  const header = <>
    <Button className='mr-3' loading={isLoading} onClick={handleClick}>
      <GoX />
    </Button>
    {error && <div>error deleting user</div>}
    {user.name}
  </>;
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={ user } />
      </ExpandablePanel>
    );
}


export default UserListItem