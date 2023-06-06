import {StarGroup} from '@perhamik/react-components'
import React from 'react'

import type {CourseType} from '@/src/shared/api'

export const Rating = ({rating}: {rating: CourseType['rating']}) => {
	return (
		<div className="d-flex gap-1 justify-content-end">
			<div className="d-flex gap-1 text-warning">
				<StarGroup value={rating} total={5} />
			</div>
			<span className="text">{rating}</span>
		</div>
	)
}
