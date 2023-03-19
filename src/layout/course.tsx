import React from 'react'
import {getPreviewWebp, getPreviewSet, transformDuration, getLessonPreviewWebp, getLessonPreviewSet} from '@/src/api'

import {Container, Image, Row, Col, ListGroup} from 'react-bootstrap'
import type {CourseSingleType, LessonType} from '@/src/types'
import Hls from 'hls.js'
import type {Events, ErrorData} from 'hls.js'
import {AppContext} from '@/src/context/index'

export default function CourseLayout({data}: {data: CourseSingleType}) {
	const [active, setActive] = React.useState<LessonType>()
	const videoEl = React.useRef<HTMLVideoElement>(null) as React.MutableRefObject<HTMLVideoElement>
	const {hls, setHls} = React.useContext(AppContext)

	const hlsConfig = {
		startPosition: 0.4,
		debug: true,
	}

	const initHls = (hls: Hls | null, setter: React.Dispatch<React.SetStateAction<Hls | null>>) => {
		if (hls || !videoEl) return
		const _hls = new Hls(hlsConfig)
		setter(() => _hls)
	}

	const resetHls = (hls: Hls | null) => {
		if (hls) {
			hls.detachMedia()
			hls.destroy()
		}
		setHls(null)
	}

	const onListItemClick = (lesson: LessonType) => {
		initHls(hls, setHls)

		setTimeout(() => {
			appendVideo(lesson)
		}, 350)
	}

	const HlsErrorHandler = (event: Events.ERROR, data: ErrorData) => {
		if (!hls) return

		if (event === 'hlsError' && hls) {
			hls.stopLoad()
			hls.detachMedia()
		}

		if (data.fatal) {
			switch (data.type) {
				case Hls.ErrorTypes.NETWORK_ERROR:
					// try to recover network error
					console.log('fatal network error encountered, try to recover')
					hls.startLoad()
					break
				case Hls.ErrorTypes.MEDIA_ERROR:
					console.log('fatal media error encountered, try to recover')
					hls.recoverMediaError()
					break
				default:
					// cannot recover
					hls.destroy()
					break
			}
		}
	}

	const appendVideo = (lesson?: LessonType) => {
		if (!hls) initHls(hls, setHls)
		const current = lesson ? lesson : active
		setTimeout(() => {
			console.log(hls, current)
			if (!hls || !current || lesson === active) return
			setActive(() => lesson)
			hls.off(Hls.Events.ERROR, HlsErrorHandler)
			hls.off(Hls.Events.MEDIA_ATTACHED, () => hls.loadSource(current.link))
			hls.on(Hls.Events.ERROR, HlsErrorHandler)
			hls.on(Hls.Events.MEDIA_ATTACHED, () => hls.loadSource(current.link))

			hls.attachMedia(videoEl.current)
		}, 250)
	}

	React.useEffect(() => {
		if (!hls) {
			initHls(hls, setHls)
		}

		if (data && data.lessons && data.lessons.at(0)) {
			const _first = data.lessons.at(0)
			if (_first && !active) {
				appendVideo(_first)
			}
		}

		return () => {
			resetHls(hls)
		}
	}, [data])

	return (
		<>
			<section className="px-4 py-5">
				<Container className="col-xxl-8">
					<Row className="flex-lg-row-reverse align-items-center g-5">
						<Col col={10} col-sm={8} col-lg={6}>
							<Image
								// didn't work correctly
								// srcSet={active ? getLessonPreviewSet(active) : getPreviewSet(data.previewImageLink)}
								// src={active ? getLessonPreviewWebp(active) : getPreviewWebp(data.previewImageLink)}
								srcSet={getPreviewSet(data.previewImageLink)}
								src={getPreviewWebp(data.previewImageLink)}
								className="d-block mx-lg-auto img-fluid"
							/>
						</Col>
						<Col col-lg={6}>
							<h2 className="display-5 fw-bold lh-1 mb-3">{data.title}</h2>
							<p className="lead">{data.description}</p>
						</Col>
					</Row>
				</Container>
			</section>
			<Container>
				<Row>
					<Col sm={8}>
						<video
							ref={videoEl}
							controls
							style={{maxWidth: '100%', display: 'flex', width: '100%', height: '100%', outline: 'none'}}
						/>
					</Col>
					<Col sm={4}>
						<ListGroup>
							{data.lessons.map((lesson, _id) => (
								<ListGroup.Item
									key={lesson.id}
									as="button"
									active={active && active.id === lesson.id}
									action
									onClick={() => onListItemClick(lesson)}
									className={`d-flex justify-content-between align-items-start ${
										lesson.available === false ? 'disabled' : ''
									}`}>
									<h3
										className={`h6 ${
											lesson.available === false ? 'text-muted' : ''
										}`}>{`${lesson.order}. ${lesson.title}`}</h3>
									<span>{transformDuration(lesson.duration)}</span>
								</ListGroup.Item>
							))}
						</ListGroup>
					</Col>
				</Row>
			</Container>
		</>
	)
}
