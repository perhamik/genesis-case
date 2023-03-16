import React from 'react'
import {Card, Button} from 'react-bootstrap'
import type {CourseType} from '@/src/types'

const getPreviewWebp = (path: string) => `${path}/cover.webp`
const getPreviewSet = (path: string) => `${getPreviewWebp(path)}, ${path}/cover.png`

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
