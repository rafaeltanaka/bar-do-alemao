import React from 'react'
import styles from './Infos.css'

const Infos = () => (
	<div className={styles.infos}>
		<div className={styles.about}>
			<div className={styles.content}>
				<h2 className={styles.title}>informações e reservas</h2>
				<div className={styles.phone}>(11) 3672-1859 / 3862-5975</div>
			</div>
			<div className={styles.content}>
				<div className={styles.text}>Avenida Antártica, 554</div>
				<div className={styles.text}>Água Branca, São Paulo, SP</div>
			</div>
			<div className={styles.content}>
				<div className={styles.text}>Estacionamentos conveniados (com o carimbo do bar):</div>
				<div className={styles.text}>No n. 608 (ao lado do Bradesco), por hora; </div>
				<div className={styles.text}>Ou em frente (do outro lado da avenida), por período.</div>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>couvert artístico</h2>
				<div className={styles.text}>Segunda: R$12</div>
				<div className={styles.text}>Terça a quinta: R$15   </div>
				<div className={styles.text}>Sexta e sábado: R$20</div>
				<div className={styles.text}>Domingo: a partir de R$25</div>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>funcionamento</h2>
				<div className={styles.subtitle}>almoço</div>
				<div className={styles.text}>Segunda a sexta: das 12h às 15h</div>
				<div className={styles.text}>Sábado: das 12h às 16h</div>
			</div>
			<div className={styles.content}>
				<div className={styles.subtitle}>noite</div>
				<div className={styles.text}>Segunda a quarta-feira: até 01h</div>
				<div className={styles.text}>Sexta e sábado: até 03h</div>
				<div className={styles.text}>Domingo: 18h - 24h*</div>
				<div className={styles.textNote}>*a abertura da casa aos domingos depende da programação.</div>
			</div>
		</div>
		<div className={styles.localization}>
			<iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1168097574123!2d-46.677883684904415!3d-23.528300766257622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57fc0e37f84f%3A0x290ad92814f3fc72!2sBar+do+Alem%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1523421927253" allowFullScreen></iframe>
		</div>
	</div>
)

export default Infos