import React from 'react'
import ScheduleList from '../../components/ScheduleList/ScheduleList'
import styles from './Programacao.css'

const Programacao = () => (
	<section className={styles.schedule} >
		{/* <h1  className={styles.title}>Programação</h1> */}
		<ScheduleList />
	</section>
)

export default Programacao