import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {getPreviewWebp, getPreviewSet} from '@/src/api'
import type {CourseType} from '@/src/types'

export default function CourseCard({data}: {data: CourseType}) {
	const {id, title, description, previewImageLink} = data
	return (
		<Card>
			<Card.Img variant="top" srcSet={getPreviewSet(previewImageLink)} src={getPreviewWebp(previewImageLink)} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Button variant="outline-primary" href={`/course/${id}`}>
					Watch
				</Button>
			</Card.Body>
		</Card>
	)
}
