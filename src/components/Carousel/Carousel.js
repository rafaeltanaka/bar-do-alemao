import React from 'react'
import image1 from './5ff6bb_2bdbbc8394664c5cbb6a77c221fd40f1_mv2.jpg'
import image2 from './5ff6bb_9e8e17275585492fa985f925edd9e49a_mv2.jpg'
import image3 from './5ff6bb_f1a513ef283941528aeac6c7b3afd540_mv2.jpg'
import styles from './Carousel.css'

class Carousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = { selectedImg: '', interval: 0 }
	}

	componentDidMount() {
		this.changeImage('image1')
		this.interval = setInterval(() => this.nextImage(), 5000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	nextImage() {
		switch (this.state.selectedImg) {
		case 'image2':
			this.changeImage('image3')
			break
		case 'image3':
			this.changeImage('image1')
			break
		case 'image1':
			this.changeImage('image2')
			break
		default:
			break
		}
	}

	changeImage(imageIndex) {
		this.setState({ selectedImg: imageIndex })
	}

	render() {

		return (
			<React.Fragment>
				<div className={styles.carousel} >
					<img className={this.state.selectedImg == 'image1' ? styles.imageSelected : styles.imageHidden} src={image1} />
					<img className={this.state.selectedImg == 'image2' ? styles.imageSelected : styles.imageHidden} src={image2} />
					<img className={this.state.selectedImg == 'image3' ? styles.imageSelected : styles.imageHidden} src={image3} />
				</div>
				<div className={styles.selectors}>
					<label className={this.state.selectedImg == 'image1' ? styles.imgSelectorOn : styles.imgSelectorOff} onClick={() => this.changeImage('image1')} checked={this.state.selectedImg == 'image1'}> </label>
					<label className={this.state.selectedImg == 'image2' ? styles.imgSelectorOn : styles.imgSelectorOff} onClick={() => this.changeImage('image2')} checked={this.state.selectedImg == 'image2'}> </label>
					<label className={this.state.selectedImg == 'image3' ? styles.imgSelectorOn : styles.imgSelectorOff} onClick={() => this.changeImage('image3')} checked={this.state.selectedImg == 'image3'}> </label>
				</div>
			</React.Fragment >
		)
	}
}

export default Carousel