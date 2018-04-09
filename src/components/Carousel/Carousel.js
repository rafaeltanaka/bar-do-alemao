import React from 'react'
import image1 from './5ff6bb_2bdbbc8394664c5cbb6a77c221fd40f1_mv2.jpg'
import image2 from './5ff6bb_9e8e17275585492fa985f925edd9e49a_mv2.jpg'
import image3 from './5ff6bb_f1a513ef283941528aeac6c7b3afd540_mv2.jpg'
import styles from './Carousel.css'

class Carousel extends React.Component {
	constructor(props){
		super(props)
		this.state = { selectedImg: 'image1' }
	}

	changeImage(imageIndex) {
		this.setState({ selectedImg: imageIndex })
		console.log(this.state.selectedImg)
	}

	render() {

		return (
			<div className={styles.carousel} >
				<img className={this.state.selectedImg == 'image1' ? styles.imageSelected : styles.imageHidden} src={image1} />
				<img className={this.state.selectedImg == 'image2' ? styles.imageSelected : styles.imageHidden} src={image2} />
				<img className={this.state.selectedImg == 'image3' ? styles.imageSelected : styles.imageHidden} src={image3} />
				<div>
					<input type="radio" name="selectImage" onClick={() => this.changeImage('image1')} />
					<input type="radio" name="selectImage" onClick={() => this.changeImage('image2')} />
					<input type="radio" name="selectImage" onClick={() => this.changeImage('image3')} />
				</div>
			</div>
		)
	}
}

export default Carousel