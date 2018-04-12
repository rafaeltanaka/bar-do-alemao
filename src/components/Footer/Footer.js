import React from 'react'
import styles from './Footer.css'
import facebook from './facebook.png'
import instagram from './instagram.png'
import youtube from './youtube.png'
import FaPhone from 'react-icons/lib/fa/phone'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official'

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
								<span className={styles.text} >Avenida Antártica, 554</span>
								<span className={styles.text} >Água Branca, São Paulo - SP</span>
								<span className={styles.text} >CEP 05003-020</span>
							</div>
							<div className={styles.wayOfContact} >
								<span className={styles.text} >(11) 3672-1859 / 3862-5975</span>
								<a className={styles.link} href="mailto:contato.bardoalemao@gmail.com">contato.bardoalemao@gmail.com</a>
							</div>
						</div>
						<div className={styles.opening} >
							<h2 className={styles.openingTitle}>funcionamento</h2>
							<div className={styles.openingHours} >
								<span className={styles.text} >Segundas, terças e quartas-feiras:</span>
								<span className={styles.text} >das 11h30 à 01h</span>
								<span className={styles.text} >Quintas, sextas e sábados:</span>
								<span className={styles.text} >das 11h30 às 03h</span>
								<span className={styles.text} >Domingos: das 18h às 24h*</span>
								<span className={styles.sunday} >*a abertura da casa aos domingos depende da programação.</span>
							</div>
						</div>
						<div className={styles.social} >
							<a className={styles.link} href="https://www.facebook.com/obardoalemao/" target="blank" rel="noopener noreferrer" >
								<img className={styles.socialIcons} src={facebook} />
							</a>
							<a className={styles.link} href="https://www.youtube.com/channel/UCSkmPWslGhBPneMu0S_IQ6w" target="blank" rel="noopener noreferrer" >
								<img className={styles.socialIcons} src={youtube} />
							</a>
							<a className={styles.link} href="https://www.instagram.com/obardoalemao/" target="blank" rel="noopener noreferrer" >
								<img className={styles.socialIcons} src={instagram} />
							</a>
						</div>
					</div>
					<form className={styles.formNews} >
						<span className={styles.formText} >Cadastre seu email para receber novidades:</span>
						<input type="text" placeholder="Nome" className={styles.inputName} />
						<input type="email" placeholder="email" className={styles.inputEmail} />
						<input type="button" value="OK" className={styles.formButton} />
					</form>
				</div>
				<div className={styles.mobileFooter} >
					<a href="tel:+55113672-1859" className={styles.contactLinks} >
						<FaPhone className={styles.footerIcons} />
					</a>
					<a href="mailto:contato.bardoalemao@gmail.com" className={styles.contactLinks} >
						<FaEnvelope className={styles.footerIcons} />
					</a>
					<a href="https://www.facebook.com/obardoalemao" className={styles.contactLinks} target="blank" rel="noopener noreferrer" >
						<FaFacebookOfficial className={styles.footerIcons} />
					</a>
				</div>
			</footer>
		)

	}
}

export default Footer