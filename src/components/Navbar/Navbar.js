import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.css'
import logoBar from './bar-do-alemao-logo.gif'
import FaBars from 'react-icons/lib/fa/bars'
import FaClose from 'react-icons/lib/fa/close'

class Navbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = { menuOpen: false }
		this.toggleMenu = this.toggleMenu.bind(this)
	}

	toggleMenu() {
		event.stopPropagation()
		this.setState({ menuOpen: !this.state.menuOpen })
	}

	render() {
		
		return (
			<header>
				<nav className={styles.navbar}>
					<div className={styles.barInfo} >
						<span className={styles.duration} >1968 - 2018</span>
						<img className={styles.logoBar} src={logoBar} alt="Logo do Bar do Alemão" />
						<span className={styles.age} >50 anos</span>
					</div>
					<span className={styles.switch} onClick={this.toggleMenu}>
						{this.state.menuOpen ? <FaClose className={styles.close} /> : <FaBars className={styles.hamburguer} />}
					</span>
					<ul className={this.state.menuOpen ? styles.menuOpen : styles.menu}>
						<Link className={styles.menuLink} to="/" onClick={this.toggleMenu}>início</Link>
						<Link className={styles.menuLink} to="/historia" onClick={this.toggleMenu}>história</Link>
						<Link className={styles.menuLink} to="/programacao" onClick={this.toggleMenu}>programação</Link>
						<Link className={styles.menuLink} to="/galeria" onClick={this.toggleMenu}>galeria</Link>
						<Link className={styles.menuLink} to="/cardapio" onClick={this.toggleMenu}>cardápio</Link>
						<Link className={styles.menuLink} to="/informacoes" onClick={this.toggleMenu}>informações</Link>
					</ul>
				</nav>
			</header>
		)
	}
}

export default Navbar