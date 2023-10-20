import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

function ProductCard({ image, title, description, price, id }) {
  const navigate = useNavigate()
  return (
    <Card
      className='w-1/5 cursor-pointer'
      onClick={() => navigate(`/product/${id}`)}
    >
      <CardHeader>
        <img src={image} alt='' className='h-[200px] w-auto object-contain' />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          {description.length > 120
            ? `${description.slice(0, 120)} ...`
            : description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <p>{price}</p>
      </CardFooter>
    </Card>
  )
}
export default ProductCard

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
}
