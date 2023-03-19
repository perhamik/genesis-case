import React from 'react'
import {Card, Button, Row, Col, Badge} from 'react-bootstrap'
import {getPreviewWebp, getPreviewSet} from '@/src/api'
import type {CourseType} from '@/src/types'

const RatingStars = ({rating}: {rating: number}) => {
	const compare = (star: string, num: number) => {
		if (Math.floor(rating) === num && Math.ceil(rating) > num) return `${star}-half`
		return Math.floor(rating) > num ? `${star}-fill` : star
	}
	const defaults = Array(5).fill('bi-star')
	const list = defaults.map((item, id) => compare(item, id))
	return (
		<div className="d-flex gap-1 justify-content-end">
			<div className="d-flex" style={{gap: '2px', color: 'var(--bs-orange)'}}>
				{list.map((star, _id) => (
					<i className={`bi ${star}`} key={`${star}_${_id}`}></i>
				))}
			</div>
			<span className="text">{rating}</span>
		</div>
	)
}

export default function CourseCard({data}: {data: CourseType}) {
	const {id, title, description, previewImageLink} = data
	return (
		<Card className="h-100">
			<Card.Img
				variant="top"
				srcSet={getPreviewSet(previewImageLink)}
				src={getPreviewWebp(previewImageLink)}
				style={{minHeight: '164px', objectFit: 'cover'}}
			/>
			<Card.Body style={{display: 'grid', justifyItems: 'start', gridTemplateRows: '1.5rem min-content', gap: '1rem'}}>
				<Row className="mx-auto w-100 justify-content-between align-items-center">
					<Col className="p-0">
						{data.tags.map((tag) => (
							<Badge
								key={tag}
								bg="success"
								className="d-flex"
								style={{width: 'fit-content', height: 'fit-content', textTransform: 'capitalize'}}>
								{tag}
							</Badge>
						))}
					</Col>
					<Col className="p-0">
						<RatingStars rating={data.rating} />
					</Col>
				</Row>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Button
					variant="outline-primary"
					href={`/course/${id}`}
					style={{width: '50%', alignSelf: 'end', justifySelf: 'center'}}>
					Watch
				</Button>
			</Card.Body>
		</Card>
	)
}
