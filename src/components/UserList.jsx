import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Button from './Button'
import Skeleton from './Skeleton'
import UserListItem from './UserListItem'
import { useThunk } from '../hooks/useThunk'
import { addUser, fetchUsers } from '../store'

function UserList() {
  let content
  const { data } = useSelector(state => {
    return state.users
  })
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)

  const handleUserAdd = () => doCreateUser()

  useEffect(() => {
    doFetchUsers()
  }, [doFetchUsers])

  if (isLoadingUsers) {
    content = <Skeleton times={6} className="w-full h-10" />
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>
  } else {
    content = data.map(user => <UserListItem key={user.id} user={user} />)
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {creatingUserError && 'Error creating user...'}
      </div>
      {content}
    </div>
  )
}

export default UserList
