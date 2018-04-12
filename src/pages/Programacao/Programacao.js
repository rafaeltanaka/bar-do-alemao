import React from 'react'
import ScheduleList from '../../components/ScheduleList/ScheduleList'
import styles from './Programacao.css'

const Programacao = () => (
	<section className={styles.schedule} >
		<ScheduleList />
	</section>
)

export default Programacao