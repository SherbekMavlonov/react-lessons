import PropTypes from 'prop-types'
import { Slider } from '@/components/ui/slider'
import { useEffect, useState } from 'react'
import Card from '@/components/card'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { genres } from '@/constants/genre'
import { Button } from '@/components/ui/button'

function Shop({
  products,
  selectedGenres,
  setSelectedGenres,
  handleLikeBtnClick,
  wishList,
}) {
  const [sliderValues, setSliderValues] = useState({
    min: 0,
    max: 0,
  })
  const [range, setRange] = useState([sliderValues?.min, sliderValues?.max])
  const [filteredProducts, setFilteredProducts] = useState([])

  const handleRangeChange = (value) => {
    setRange(value)
  }

  useEffect(() => {
    if (!selectedGenres.length) {
      setSelectedGenres([...genres])
    }
  }, [])
  useEffect(() => {
    if (products) {
      setFilteredProducts(products)
    }
  }, [products])

  useEffect(() => {
    if (products.length) {
      setSliderValues(
        products.reduce(
          (acc, curr) =>
            curr.originalPrice > acc.max
              ? { ...acc, max: curr.originalPrice }
              : acc,
          { min: 0, max: 0 }
        )
      )
    }
  }, [products])

  useEffect(() => {
    let newProducts = products.filter(
      (product) =>
        (product.discountedPrice >= range[0] ||
          product.originalPrice >= range[0]) &&
        (product.discountedPrice <= range[1] ||
          product.originalPrice <= range[1])
    )

    newProducts = newProducts.filter(
      (pr) =>
        selectedGenres.findIndex(
          (gr) => gr.title.toUpperCase() == pr.genre.toUpperCase()
        ) !== -1
    )

    setFilteredProducts([...newProducts])
  }, [range, selectedGenres])

  useEffect(() => {
    setRange([sliderValues.min, sliderValues.max])
  }, [sliderValues])

  const handleGenreChange = (title) => {
    const currentGrIdx = selectedGenres.findIndex((gr) => gr.title == title)
    if (currentGrIdx === -1) {
      setSelectedGenres((prev) => [...prev, { title }])
    } else {
      selectedGenres.splice(currentGrIdx, 1)
      setSelectedGenres([...selectedGenres])
    }
  }
  const onClear = () => {
    setSelectedGenres([...genres])
    setRange([0, sliderValues.max])
  }

  return (
    <div>
      <Button onClick={onClear} className='mb-5'>
        Clear Filter
      </Button>
      <Slider
        defaultValue={[sliderValues.min, sliderValues.max]}
        max={sliderValues?.max}
        min={0}
        step={0.5}
        value={range}
        onValueChange={handleRangeChange}
        formatLabel={(value) => `${value} `}
      />
      <div className='mt-8'>
        {genres.map((genre) => (
          <div className='flex items-center space-x-2 mt-2' key={genre.title}>
            <Checkbox
              id={genre.title}
              checked={
                selectedGenres.findIndex((gr) => gr.title == genre.title) !== -1
              }
              onCheckedChange={() => handleGenreChange(genre.title)}
            />
            <Label
              htmlFor={genre.title}
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
            >
              {genre.title}
            </Label>
          </div>
        ))}
      </div>

      <div className='flex justify-around mt-8 gap-5 flex-wrap'>
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <Card
              key={product._id}
              {...product}
              handleLikeBtnClick={handleLikeBtnClick}
              isLiked={
                wishList.findIndex(
                  (wishItem) => wishItem._id === product._id
                ) === -1
              }
            />
          ))
        ) : (
          <h1>Not found</h1>
        )}
      </div>
    </div>
  )
}
export default Shop

Shop.propTypes = {
  sliderValues: PropTypes.object,
  setSliderValues: PropTypes.func,
  products: PropTypes.array,
  selectedGenres: PropTypes.array,
  setSelectedGenres: PropTypes.func,
  handleLikeBtnClick: PropTypes.func,
  wishList: PropTypes.array,
}
