import React from 'react'

const initialStarClass = Array(5).fill('bi-star')

const RatingStars = ({rating}: {rating: number}) => {
	const listOfStarClasses = React.useMemo(
		() =>
			initialStarClass.map((star, id) => {
				if (Math.floor(rating) === id && Math.ceil(rating) > id) return `${star}-half`

				return Math.floor(rating) > id ? `${star}-fill` : star
			}),
		[rating],
	)

	return (
		<div className="d-flex gap-1 justify-content-end">
			<div className="d-flex gap-1 text-warning">
				{listOfStarClasses.map((star, _id) => (
					<i key={`${star}_${_id}`} className={`bi ${star}`}></i>
				))}
			</div>
			<span className="text">{rating}</span>
		</div>
	)
}

export default RatingStars
