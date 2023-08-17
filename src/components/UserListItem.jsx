import { TrashIcon } from '@heroicons/react/24/outline'

import AlbumList from './AlbumList'
import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import { useThunk } from '../hooks/useThunk'
import { removeUser } from '../store'

function UserListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser)

  const handleClick = () => doRemoveUser(user)

  const header = (
    <>
      <Button
        className="mr-3"
        loading={isLoading || null}
        onClick={handleClick}
      >
        <TrashIcon className="w-5 h-5" />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  )

  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  )
}

export default UserListItem
