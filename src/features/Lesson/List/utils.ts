type DispatchOnVideoOptions = {
	ref: React.MutableRefObject<HTMLVideoElement | null>
	eventName: 'input' | 'change'
	detail: {}
}

export const dispatchEventOnVideoRef = (options: DispatchOnVideoOptions) => {
	const video = options.ref?.current

	if (!video) return

	const event = new CustomEvent(options.eventName, {
		detail: options.detail,
	})

	video.dispatchEvent(event)
}
