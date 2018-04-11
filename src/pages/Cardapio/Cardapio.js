import React from 'react'
import Menu from '../../components/Menu/Menu'
import styles from './Cardapio.css'

const Cardapio = () => (
	<section className={styles.menu} >
		<h1 className={styles.title} >cardápio</h1>
		<section className={styles.container} >
			<Menu />
		</section>
	</section>
)

export default Cardapio