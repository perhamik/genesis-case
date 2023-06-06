'use client'

import {Col, Container, Row} from '@perhamik/react-components'
import React from 'react'

import {Lesson, LessonInfo, LessonVideo, LessonsList} from '@/src/features/Lesson'
import type {CourseSingleType} from '@/src/shared/api'

export const Single = ({course}: {course: CourseSingleType}) => {
	return (
		<Lesson course={course}>
			<section className="px-4 py-5">
				<Container>
					<LessonInfo />
				</Container>
			</section>

			<Container>
				<Row className="gap-4 flex-row-reverse flex-lg-row">
					<Col col={12} col-lg={8}>
						<LessonVideo />
					</Col>
					<Col col={12} col-lg="auto">
						<LessonsList />
					</Col>
				</Row>
			</Container>
		</Lesson>
	)
}
