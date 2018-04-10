import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ScheduleList.css'
import domingo from './5ff6bb_171acc29eeec4893a253fbd018422cc2_mv2.webp'

const ScheduleList = () => (
	<section>
		<article className={styles.weekday} >
			<div className={styles.imageWrapper}>
				<Link to="/" className={styles.link} >
					<img className={styles.image} src={domingo} />
				</Link>
			</div>
			<div className={styles.content} >
				<h2 className={styles.day} >segunda | roda de choro</h2>
				<span className={styles.time} >a partir das 22h30</span>
			</div>
		</article>
	</section>
)

export default ScheduleList