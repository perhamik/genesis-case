import React from 'react'

const onButtonClick = () => {
	alert('test')
}

export default class Test extends React.Component {
	render() {
		return (
			<div>
				<button onClick={onButtonClick}>Test</button>
			</div>
		)
	}
}
