import PropTypes from 'prop-types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

function SortBy({ sortBy, setSortBy }) {
  return (
    <Select onValueChange={(val) => setSortBy(val)} value={sortBy}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Sort By' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='desc'>A-Z</SelectItem>
        <SelectItem value='asc'>Z-A</SelectItem>
      </SelectContent>
    </Select>
  )
}
export default SortBy

SortBy.propTypes = {
  sortBy: PropTypes.string,
  setSortBy: PropTypes.func,
}
