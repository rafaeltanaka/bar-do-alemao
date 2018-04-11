import React from 'react'
import Infos from '../../Infos/Infos'
import styles from './Informacoes.css'

const Informacoes = () => (
	<section className={styles.info}>
		<h1 className={styles.title}>Informações</h1>
		<Infos />
	</section>
)

export default Informacoes