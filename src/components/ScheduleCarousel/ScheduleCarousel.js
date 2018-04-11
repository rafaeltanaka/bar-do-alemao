import React from 'react'
import styles from './ScheduleCarousel.css'

const ScheduleCarousel = props => (
	<div className={props.className} >
		<img className={styles.image} src={props.src} />
		<div className={styles.caption} >
			<div className={styles.description} >
				<span className={styles.imgTitle} >{props.imgTitle}</span>
				<span className={styles.imgDescription}>{props.imgDescrition}</span>
			</div>
			<span className={styles.control} >
				<div className={styles.arrowLeft}></div>
				<span className={styles.number} >{props.actualImg}/{props.dataSize}</span>
				<div className={styles.arrowRight}></div>
			</span>
		</div>
	</div>
)

export default ScheduleCarousel