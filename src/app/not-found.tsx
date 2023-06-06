'use client'

import {Metadata} from 'next'

import {Col, Container, Row} from '@/src/shared/ui'

export const metadata: Metadata = {
	title: '404 - Not Found',
	description: 'Something went wrong',
}

export default function NotFound() {
	return (
		<Container>
			<Row className="my-4 row-cols-1 g-3">
				<Col>
					<h1>Sorry, nothing here...</h1>
				</Col>
			</Row>
		</Container>
	)
}
