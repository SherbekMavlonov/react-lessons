import { useParams } from 'react-router-dom'
import { useGetPostByIdQuery } from '../features/posts'

function SinglePost() {
  const { id } = useParams()
  const { data, isLoading } = useGetPostByIdQuery(id)
  if (isLoading) {
    return <h1>Loading ...</h1>
  }

  return (
    <div>
      <h1>{data.title}</h1>

      <p>{data.body}</p>
    </div>
  )
}
export default SinglePost
