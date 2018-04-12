import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import styles from './Home.css'

const Home = () => (
	<section className={styles.home} >
		<Carousel />
		<div className={styles.content} >
			<h1 className={styles.title} >bar do alemão: 50 anos de boa música e conversa boa</h1>
			<p className={styles.text} >Estamos comemorando mais de 18 mil e uma noites de alegria.</p>
			<p className={styles.text} >Não é qualquer bar que chega ao cinquentenário novo em folha, mantendo a mesma linha musical, brasileiríssima, o mesmo chope sempre bem tirado, e a mesma comidinha que parece feita em casa.</p>
			<p className={styles.text} >Isso desde a fundação, em 1968, para nós também o ano que não terminou.</p>
			<p className={styles.text} >Porque no Bar do Alemão, como na vida boêmia e nos grandes amores, o melhor ainda está por acontecer.</p>
			<div className={styles.signature} >
				<span className={styles.signatureName} >Aluísio Falcão</span>
				<span className={styles.signatureDate} >(março/2018)</span>
			</div>
		</div>
	</section>
)

export default Home