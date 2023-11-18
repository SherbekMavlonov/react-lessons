import { Link } from 'react-router-dom'
import { useGetAllPostsQuery } from '../features/posts'

function Posts() {
  const { isLoading, data } = useGetAllPostsQuery()
  // const [getAllPosts, { isLoading, data }] = useLazyGetAllPostsQuery()

  // useEffect(() => {
  //   getAllPosts()
  // }, [])
  console.log('Rendering ......')
  return isLoading ? (
    <h1>Loading ...</h1>
  ) : (
    <>
      {data?.map((post) => (
        <h1 key={post.id}>
          <Link to={'/post/' + String(post.id)}>{post.title}</Link>
        </h1>
      ))}
    </>
  )
}
export default Posts
