import React from 'react'
import ScheduleList from '../../ScheduleList/ScheduleList'
// C:\Users\Diogo\desktop\bar-do-alemao\src\components\ScheduleList\ScheduleList.js
import styles from './Programacao.css'

const Programacao = () => (
	<section className={styles.schedule} >
		<h1  className={styles.title}>Programação</h1>
		<ScheduleList />
	</section>
)

export default Programacao