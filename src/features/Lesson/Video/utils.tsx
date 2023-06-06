import Hls, {ErrorData, Events} from 'hls.js'
import React from 'react'

import type {LessonType} from '@/src/shared/api'

const appendHlsErrorHandler = (hls: Hls, lesson: LessonType): void => {
	if (!hls) return

	const HlsErrorHandler = (event: Events.ERROR, data: ErrorData) => {
		if (event === 'hlsError' && hls) {
			hls.stopLoad()
			hls.detachMedia()
		}

		if (data.fatal) {
			switch (data.type) {
				case Hls.ErrorTypes.NETWORK_ERROR:
					console.log('fatal network error encountered, try to recover')
					hls.startLoad()
					break

				case Hls.ErrorTypes.MEDIA_ERROR:
					console.log('fatal media error encountered, try to recover')
					hls.recoverMediaError()
					break

				default:
					hls.destroy()
					break
			}
		}
	}

	hls.off(Hls.Events.ERROR, HlsErrorHandler)
	hls.off(Hls.Events.MEDIA_ATTACHED, () => hls.loadSource(lesson.link))
	hls.on(Hls.Events.ERROR, HlsErrorHandler)
	hls.on(Hls.Events.MEDIA_ATTACHED, () => hls.loadSource(lesson.link))
}

export const attachHlsVideo = (
	lesson: LessonType,
	time: number,
	ref: React.MutableRefObject<HTMLVideoElement | null>,
): Hls => {
	const hls = new Hls({startPosition: time})
	console.log(time, hls)
	const video = ref?.current
	if (!video) return hls
	appendHlsErrorHandler(hls, lesson)
	hls.attachMedia(video)
	return hls
}
