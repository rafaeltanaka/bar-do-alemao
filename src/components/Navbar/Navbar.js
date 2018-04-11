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
		window.event.stopPropagation()
		this.setState({ menuOpen: !this.state.menuOpen })
	}

	linkHandler(page) {
		this.setState({ menuOpen: false, pageOpen: page })
	}

	render() {
		
		return (
			<header>
				<nav className={styles.navbar}>
					{this.state.menuOpen && <div className={styles.menuClose} onClick={this.toggleMenu} ></div>}
					<div className={styles.barInfo} >
						<span className={styles.duration} >1968 - 2018</span>
						<img className={styles.logoBar} src={logoBar} alt="Logo do Bar do Alemão" />
						<span className={styles.age} >50 anos</span>
					</div>
					<span className={styles.switch} onClick={this.toggleMenu}>
						{this.state.menuOpen ? <FaClose className={styles.close} /> : <FaBars className={styles.hamburguer} />}
					</span>
					<ul className={this.state.menuOpen ? styles.menuOpen : styles.menu}>
						<Link className={this.state.pageOpen == 'inicio' ? styles.menuLinkClicked : styles.menuLink} to="/" onClick={() => this.linkHandler('inicio')}>início</Link>
						<Link className={this.state.pageOpen == 'historia' ? styles.menuLinkClicked : styles.menuLink} to="/historia" onClick={() => this.linkHandler('historia')}>história</Link>
						<Link className={this.state.pageOpen == 'programacao' ? styles.menuLinkClicked : styles.menuLink} to="/programacao" onClick={() => this.linkHandler('programacao')}>programação</Link>
						<Link className={this.state.pageOpen == 'galeria' ? styles.menuLinkClicked : styles.menuLink} to="/galeria" onClick={() => this.linkHandler('galeria')}>galeria</Link>
						<Link className={this.state.pageOpen == 'cardapio' ? styles.menuLinkClicked : styles.menuLink} to="/cardapio" onClick={() => this.linkHandler('cardapio')}>cardápio</Link>
						<Link className={this.state.pageOpen == 'informacoes' ? styles.menuLinkClicked : styles.menuLink} to="/informacoes" onClick={() => this.linkHandler('informacoes')}>informações</Link>
					</ul>
				</nav>
			</header>
		)
	}
}

export default Navbar