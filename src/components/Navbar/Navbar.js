import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.css'
import logoBar from './bar-do-alemao-logo.gif'

class Navbar extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {

		return (
			<header>
				<nav className={styles.navbar}>
					<ul className={styles.menu}>
						<Link className={styles.menuLink} to="/">início</Link>
						<Link className={styles.menuLink} to="/historia">história</Link>
						<Link className={styles.menuLink} to="/programacao">programação</Link>
						<Link className={styles.menuLink} to="/galeria">galeria</Link>
						<Link className={styles.menuLink} to="/cardapio">cardápio</Link>
						<Link className={styles.menuLink} to="/informacoes">informações</Link>
					</ul>
				</nav>
				<img className={styles.logoBar} src={logoBar} alt="Logo do Bar do Alemão"/>
				<span className={styles.age} >50 anos</span>
			</header>
		)
	}
}

export default Navbar