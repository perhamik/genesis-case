import React from 'react'

import {IVideoElement} from '@/src/types'

const CourseVideo = React.forwardRef<IVideoElement>((_, ref) => <video ref={ref} controls className="d-flex w-100 h-100" />)

CourseVideo.displayName = 'CourseVideo'

export default CourseVideo
