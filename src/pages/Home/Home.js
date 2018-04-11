import React from 'react'
import Carousel from '../../Carousel/Carousel'
import style from './Home.css'

const Home = () => (
	<section className={style.home} >
		<Carousel />
		<div className={style.content} >
			<h1 className={style.title} >bar do alemão: 50 anos de boa música e conversa boa</h1>
			<p className={style.text} >Estamos comemorando mais de 18 mil e uma noites de alegria.</p>
			<p className={style.text} >Não é qualquer bar que chega ao cinquentenário novo em folha, mantendo a mesma linha musical, brasileiríssima, o mesmo chope sempre bem tirado, e a mesma comidinha que parece feita em casa.</p>
			<p className={style.text} >Isso desde a fundação, em 1968, para nós também o ano que não terminou.</p>
			<p className={style.text} >Porque no Bar do Alemão, como na vida boêmia e nos grandes amores, o melhor ainda está por acontecer.</p>
			<div className={style.signature} >
				<strong>Aluísio Falcão</strong>
				<span>(março/2018)</span>
			</div>
		</div>
	</section>
)

export default Home