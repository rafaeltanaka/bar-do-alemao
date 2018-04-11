import React, { Component } from 'react'
import Gallery from 'react-grid-gallery'
import styles from './Galeria.css'

const IMAGES =
[{
	src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
	thumbnail: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
	thumbnailWidth: 320,
	thumbnailHeight: 174,
	isSelected: true,
	caption: 'After Rain (Jeshu John - designerspics.com)'
},
{
	src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
	thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
	thumbnailWidth: 320,
	thumbnailHeight: 212,
	tags: [{value: 'Ocean', title: 'Ocean'}, {value: 'People', title: 'People'}],
	caption: 'Boats (Jeshu John - designerspics.com)'
},

{
	src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
	thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
	thumbnailWidth: 320,
	thumbnailHeight: 212
}]


const style = {position: 'relative'}
class Galeria extends Component {
	render() {
		return (
			
			<div className=
				{styles.container} >
				{console.log(Gallery)}
				<Gallery style={style} images={IMAGES}>
					
				</Gallery>
			</div>
			// </section>
		)
	}
}

// export default App;


// import React, { Component } from 'react'
// import Gallery from 'react-grid-gallery'
// import styles from './Galeria.css'

// const images = 
// [{
// 	src: '/assets/images/image01.jpg',
// 	thumbnail: '/assets/images/image01.jpg',
// 	thumbnailWidth: '200',
// },
// {
// 	src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
// 	thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg', 
// 	caption: 'Aqui vou colocar um caption'
// },
// {
// 	src: '/assets/images/image02.jpg',
// 	thumbnail: '/assets/images/image02.jpg', 
// 	caption: 'Aqui vou colocar um caption',
// },
// {
// 	src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
// 	thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg', 
// 	caption: 'Aqui vou colocar um caption'
// },{
// 	src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
// 	thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg', 
// 	caption: 'Aqui vou colocar um caption'
// },{
// 	src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
// 	thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg', 
// 	caption: 'Aqui vou colocar um caption'
// },{
// 	src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
// 	thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg', 
// 	caption: 'Aqui vou colocar um caption'
// },{
// 	src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
// 	thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg', 
// 	caption: 'Aqui vou colocar um caption'
// },{
// 	src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
// 	thumbnail: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg', 
// 	caption: 'Aqui vou colocar um caption'
// },
// {
// 	src: '/assets/images/image01.jpg',
// 	thumbnail: '/assets/images/image01.jpg', 
// 	caption: 'Aqui vou colocar um caption',
// },
// {
// 	src: '/assets/images/image02.jpg',
// 	thumbnail: '/assets/images/image02.jpg', 
// 	caption: 'Aqui vou colocar um caption',
// },

// {
// 	src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
// 	thumbnail: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',

// }]


// class Galeria extends Component {
// 	render () {
// 		return (
// 			<section className={styles.menu} >
// 				<h1 className={styles.title} >galeria</h1>
// 				<section className={styles.container} >
// 					<Gallery images={images}/>
// 					{document.getElementById('example-0')}
// 				</section>
// 			</section>
// 		)
// 	}
// }
	


export default Galeria