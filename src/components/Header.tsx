import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

export default function Header() {
	// const {token, setToken} = React.useContext(AppContext)
	return (
		<header>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">Courses</Navbar.Brand>
				</Container>
			</Navbar>
		</header>
	)
}
