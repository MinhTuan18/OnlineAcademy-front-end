const orderType = {
	ASC: 'asc', 
	DESC: 'desc'
}

const PAGE_SIZE = 9;

const courseSortOrder = [
  {
    id: 'createdAt:desc',
    value: 'Newest',
  },
  {
    id: 'rating:desc',
    value: 'Best Rated',
  },
  {
    id: 'price:desc',
    value: 'Price high to low',
  },
  {
    id: 'price:asc',
    value: 'Price low to high',
  }
]

const defaultCourseSortOrder = courseSortOrder[0];

module.exports = {
  orderType,
  PAGE_SIZE,
  defaultCourseSortOrder,
  courseSortOrder
}