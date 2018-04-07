import React from 'react'
import styles from './Footer.css'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaYoutubePlay from 'react-icons/lib/fa/youtube-play'
import FaInstagram from 'react-icons/lib/fa/instagram'

class Footer extends React.Component {
	constructor(props) {
		super(props)

	}

	render() {

		return (
			<footer className={styles.footer} >
				<div className={styles.footerWrapper} >
					<div className={styles.contact}>
						<div className={styles.contactInfo} >
							<h2 className={styles.contactTitle} >contato</h2>
							<div className={styles.address} >
								<span>Avenida Antártica, 554</span>
								<span>Água Branca, São Paulo - SP</span>
								<span>CEP 05003-020</span>
							</div>
							<div className={styles.wayOfContact} >
								<span>(11) 3672-1859 / 3862-5975</span>
								<span>contato.bardoalemao@gmail.com</span>
							</div>
						</div>
						<div className={styles.opening} >
							<h2 className={styles.openingTitle}>funcionamento</h2>
							<div className={styles.openingHours} >
								<span>Segundas, terças e quartas-feiras:</span>
								<span>das 11h30 à 01h</span>
								<span>Quintas, sextas e sábados:</span>
								<span>das 11h30 às 03h</span>
								<span>Domingos: das 18h às 24h*</span>
								<span className={styles.sunday} >*a abertura da casa aos domingos depende da programação.</span>
							</div>
						</div>
						<div className={styles.social} >
							<FaFacebook className={styles.socialIcons} />
							<FaYoutubePlay className={styles.socialIcons} />
							<FaInstagram className={styles.socialIcons} />
						</div>
					</div>
					<form className={styles.formNews} >
						<span className={styles.formText} >Cadastre seu email para receber novidades:</span>
						<input type="text" placeholder="Nome" className={styles.inputName} />
						<input type="email" placeholder="email" className={styles.inputEmail} />
						<input type="button" value="OK" className={styles.formButton} />
					</form>
				</div>
			</footer>
		)

	}
}

export default Footer