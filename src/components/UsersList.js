import { useEffect  } from 'react';
import {  useSelector } from 'react-redux';
import { addUser, fetchUsers } from '../store';
import Button from './Button'
import Skeleton from './Skeleton';
import { useThunk } from '../hooks/use-thunk';
import UserListItem from './UserListItem';

const UsersList = () => {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const { data  }=useSelector((state) => {
        return state.users
    })

    useEffect(() => {
      doFetchUsers();
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUser();
    }
    let content;
    if (isLoadingUsers) {
        content =  <Skeleton times={10} className="h-10 w-full" />
    }
   else if (loadingUsersError) {
        content =  <div>error fetching data</div>
    } else {
        content = data.map((user) => {
   
            return <UserListItem key={ user.id} user={user} />
        });
    }

    
    return (
      <div>
        <div className="flex flex-row justify-between items-center m-3">
          <h1 className="m-2 text-xl">Users</h1>
            <Button loading={isCreatingUser} onClick={handleUserAdd} > +Add Users</Button>
          {creatingUserError && "error CreatingUser"}
        </div>
        {content}
      </div>
    );
}
export default UsersList;