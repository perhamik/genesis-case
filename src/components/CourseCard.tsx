import React from 'react'
import {Badge, Button, Card, Col, Row} from 'react-bootstrap'

import {getPreviewSet, getPreviewWebp} from '@/src/services'
import type {CourseType} from '@/src/types'

import RatingStars from './RatingStars'

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

			<Card.Body className="d-grid justify-items-start gap-2">
				<Row className="mx-auto w-100 justify-content-between align-items-center">
					<Col className="p-0">
						{data.tags.map((tag) => (
							<Badge key={tag} bg="success" className="text-capitalize">
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

				<Button variant="outline-primary" href={`/course/${id}`} className="w-50 align-self-end mx-auto">
					Watch
				</Button>
			</Card.Body>
		</Card>
	)
}
