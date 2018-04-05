import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {

		return (
			<header>
				<nav className="">
					<Link to="/">início</Link>
					<Link to="/historia">história</Link>
					<Link to="/programacao">programação</Link>
					<Link to="/galeria">galeria</Link>
					<Link to="/cardapio">cardápio</Link>
					<Link to="/informacoes">informações</Link>
				</nav>
			</header>
		)
	}
}

export default Navbar