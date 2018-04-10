import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ScheduleList.css'
import segunda from './5ff6bb_171acc29eeec4893a253fbd018422cc2_mv2.webp'
import terca from './5ff6bb_24d87439ed894ba4b178efb48bcdbe91_mv2_d_1871_1295_s_2.webp'
import quarta from './5ff6bb_47cf6bc1de5945109877903865835cdb_mv2.webp'
import quinta from './5ff6bb_40f752b47fa7427791ef8d5d57c1597b_mv2.webp'
import sexta from './5ff6bb_f3ecb77d2a564f348258a8d94c249491_mv2.webp'
import domingo from './5ff6bb_1a2a9066d19841f9b7af83a314909194_mv2.webp'

const ScheduleList = () => (
	<section className={styles.scheduleList} >
		<article className={styles.weekday} >
			<div className={styles.imageWrapper}>
				<Link to="/" className={styles.link} >
					<img className={styles.image} src={segunda} />
				</Link>
			</div>
			<div className={styles.content} >
				<h2 className={styles.day} >segunda</h2>
				<h2 className={styles.day} >roda de choro</h2>
				<span className={styles.time} >a partir das 22h30</span>
			</div>
		</article>
		<article className={styles.weekday} >
			<Link to="/" className={styles.link} >
				<img className={styles.image} src={terca} />
			</Link>
			<div className={styles.content} >
				<h2 className={styles.day} >terça</h2>
				<h2 className={styles.day} >mpb e seresta</h2>
				<span className={styles.time} >a partir das 20h30</span>
			</div>
		</article>
		<article className={styles.weekday} >
			<Link to="/" className={styles.link} >
				<img className={styles.image} src={quarta} />
			</Link>
			<div className={styles.content} >
				<h2 className={styles.day} >quarta</h2>
				<h2 className={styles.day} >mpb</h2>
				<span className={styles.time} >a partir das 20h30</span>
			</div>
		</article>
		<article className={styles.weekday} >
			<Link to="/" className={styles.link} >
				<img className={styles.image} src={quinta} />
			</Link>
			<div className={styles.content} >
				<h2 className={styles.day} >quinta</h2>
				<h2 className={styles.day} >roda de samba</h2>
				<span className={styles.time} >a partir das 21h</span>
			</div>
		</article>
		<article className={styles.weekday} >
			<Link to="/" className={styles.link} >
				<img className={styles.image} src={sexta} />
			</Link>
			<div className={styles.content} >
				<h2 className={styles.day} >sexta/sábado</h2>
				<h2 className={styles.day} >mpb</h2>
				<span className={styles.time} >a partir das 21h30</span>
			</div>
		</article>
		<article className={styles.weekday} >
			<Link to="/" className={styles.link} >
				<img className={styles.image} src={domingo} />
			</Link>
			<div className={styles.content} >
				<h2 className={styles.day} >domingo</h2>
				<h2 className={styles.day} >shows</h2>
				<span className={styles.time} >a partir das 19h</span>
			</div>
		</article>
	</section>
)

export default ScheduleList