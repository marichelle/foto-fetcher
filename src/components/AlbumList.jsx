import Button from './Button'
import ExpandablePanel from './ExpandablePanel'
import Skeleton from './Skeleton'
import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store'

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user)
  const [addAlbum] = useAddAlbumMutation()

  const handleClick = () => {
    addAlbum(user)
  }

  if (error) {
    return <div>Error loading albums.</div>
  }

  if (isLoading) {
    return <Skeleton times={3} />
  }

  return (
    <div>
      <div>
        Albums by {user.name}
        <Button onClick={handleClick}>+ Add Album</Button>
      </div>
      <div>
        {data.map(({ id, title }) => (
          <ExpandablePanel key={id} header={title}>
            List of photos in the album
          </ExpandablePanel>
        ))}
      </div>
    </div>
  )
}

export default AlbumList
