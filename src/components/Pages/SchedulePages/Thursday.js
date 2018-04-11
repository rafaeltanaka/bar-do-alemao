import React from 'react'
import scheduleData from '../../ScheduleData/thursday/thursday'
import styles from './SchedulePages.css'

class Thursday extends React.Component {
	constructor(props) {
		super(props)
		this.state = { selectedImg: 0 }
	}

	componentDidMount() {
		this.interval = setInterval(() => this.nextImage(), 5000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	nextImage() {
		if (this.state.selectedImg >= (scheduleData.length -1) ) {
			this.changeImage(0)
		} else {
			this.changeImage(this.state.selectedImg + 1)
		}
	}

	changeImage(index) {
		if (index < 0) {
			this.setState({ selectedImg: scheduleData.length - 1})
		} else if (index > scheduleData.length - 1) {
			this.setState({ selectedImg: 0 })
		} else {
			this.setState({ selectedImg: index })
		}
	}
	render() {
		
		return (
			<div className={styles.weekday}>
				<h1 className={styles.title} >{scheduleData[0].title}</h1>
				<span className={styles.description} >{scheduleData[0].description}</span>
				{scheduleData.map((item, index) => (
					<div className={this.state.selectedImg == index ? styles.carousel : styles.carouselHide} key={index}>
						<img className={styles.image} src={item.img} />
						<div className={styles.caption} >
							<div className={styles.description} >
								<h3 className={styles.imgTitle} >{scheduleData[0].imgTitle}</h3>
								<span className={styles.imgDescription}>{item.imgDescrition}</span>
							</div>
							<span className={styles.control} >
								<div className={styles.arrowLeft} onClick={() => this.changeImage(--index)} ></div>
								<span className={styles.number} >{index + 1}/{scheduleData.length}</span>
								<div className={styles.arrowRight} onClick={() => this.changeImage(++index)}></div>
							</span>
						</div>
					</div>
				))}
			</div>
		)
	}
}

export default Thursday