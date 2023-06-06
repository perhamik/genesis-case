import {Col, Row} from '@perhamik/react-components'
import Image from 'next/image'
import React from 'react'

import {getPreviewWebp} from '@/src/shared/lib'

import {CourseContext} from '../context'

export const LessonInfo = () => {
	const {currentCourse} = React.useContext(CourseContext)
	if (!currentCourse) return null

	return (
		<Row className="flex-lg-row-reverse align-items-center g-5">
			<Col col={12} col-lg="auto">
				<Image
					src={getPreviewWebp(currentCourse.previewImageLink)}
					className="d-block mx-lg-auto img-fluid"
					alt="Course Preview"
					width={512}
					height={512}
					quality={90}
					style={{minHeight: '164px', objectFit: 'cover', width: '100%', height: 'auto'}}
				/>
			</Col>
			<Col col={12} col-lg={6}>
				<h2 className="display-5 fw-bold lh-1 mb-3">{currentCourse.title}</h2>
				<p className="lead">{currentCourse.description}</p>
			</Col>
		</Row>
	)
}
