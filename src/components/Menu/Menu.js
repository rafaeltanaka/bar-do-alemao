import React from 'react'
import styles from './Menu.css'
import MenuList from './MenuList.js'

const Menu = () => (
	<React.Fragment>
		<div className={styles.segment} >
			<div className={styles.leftHalf} >
				<article className={styles.categories}>
					<h2 className={styles.categoriesTitle} >filés</h2>
					<ul className={styles.categoriesItem} >
						{MenuList.files.map(item => (
							<React.Fragment key={item.title}>
								<li className={styles.itemTitle}>{item.title}</li>
								<li className={styles.itemDescription} >{item.description}</li>
							</React.Fragment>
						))}
					</ul>
				</article>
			</div>
			<div className={styles.rightHalf} >
				<article className={styles.categories}>
					<h2 className={styles.categoriesTitle} >massas</h2>
					<span className={styles.categorieDescription} >(ao molho de tomates frescos preparado na casa)</span>
					<ul className={styles.categoriesItem}>
						{MenuList.massas.map(item => (
							<React.Fragment key={item.title}>
								<li className={styles.itemTitle} >{item.title}</li>
								<li className={styles.itemDescription} >{item.description}</li>
							</React.Fragment>
						))}
					</ul>
				</article>
				<article className={styles.categories}>
					<h2 className={styles.categoriesTitle} >alemães</h2>
					<ul className={styles.categoriesItem}>
						{MenuList.alemaes.map(item => (
							<React.Fragment key={item.title}>
								<li className={styles.itemTitle} >{item.title}</li>
							</React.Fragment>
						))}
					</ul>
					<span className={styles.sideDishes}>Para acompanhar [qualquer um dos pratos]:</span>
					<ul className={styles.categoriesItem}>
						{MenuList.alemaesSideDishes.map(item => (
							<React.Fragment key={item.title}>
								<li className={styles.itemTitle} >{item.title}</li>
							</React.Fragment>
						))}
					</ul>
				</article>
				<article className={styles.categories}>
					<h2 className={styles.categoriesTitle} >outros</h2>
					<ul className={styles.categoriesItem}>
						{MenuList.outros.map(item => (
							<React.Fragment key={item.title}>
								<li className={styles.itemTitle} >{item.title} <span className={styles.otherDescription} >{item.description}</span></li>
							</React.Fragment>
						))}
					</ul>
				</article>
			</div>
		</div>
		<div className={styles.segment}>
			<div className={styles.leftHalf} >
				<article className={styles.categories}>
					<h2 className={styles.categoriesTitle} >porções</h2>
					<ul className={styles.categoriesItem}>
						{MenuList.porcoes.map(item => (
							<React.Fragment key={item.title}>
								<li className={styles.itemTitle} >{item.title}</li>
								<li className={styles.itemDescription} >{item.description}</li>
							</React.Fragment>
						))}
					</ul>
				</article>
			</div>
			<div className={styles.rightHalf} >
				<article className={styles.categories}>
					<h2 className={styles.categoriesTitle} >sanduíches</h2>
					<ul className={styles.categoriesItem}>
						{MenuList.sanduiches.map(item => (
							<React.Fragment key={item.title}>
								<li className={styles.itemTitle} >{item.title}</li>
								<li className={styles.itemDescription} >{item.description}</li>
							</React.Fragment>
						))}
					</ul>
				</article>
				<article className={styles.categories}>
					<h2 className={styles.categoriesTitle} >e mais</h2>
					<ul className={styles.categoriesItem}>
						{MenuList.emais.map(item => (
							<React.Fragment key={item.title}>
								<li className={styles.itemTitle} >{item.title}</li>
							</React.Fragment>
						))}
					</ul>
				</article>
				<article className={styles.categories}>
					<h2 className={styles.categoriesTitle} >sobremesas</h2>
					<ul className={styles.categoriesItem}>
						{MenuList.sobremesas.map(item => (
							<React.Fragment key={item.title}>
								<li className={styles.itemTitle} >{item.title}</li>
							</React.Fragment>
						))}
					</ul>
				</article>
			</div>
		</div>
		<div className={styles.segment}>
			<article className={styles.categories}>
				<h2 className={styles.categoriesTitle} >almoço</h2>
				<span className={styles.categorieDescription} >[No almoço todos os outros pratos do Cardápio estão disponíveis.</span>
				<span className={styles.categorieDescription} >Os Filés a Parmegiana (de mignon ou de frango) são oferecidos também para 2 pessoas]</span>
				<h2 className={styles.categoriesTitle} >especiais do dia</h2>
				<ul className={styles.categoriesItem}>
					{MenuList.especiais.map(item => (
						<React.Fragment key={item.title}>
							<li className={styles.itemTitle} >{item.title}</li>
							<li className={styles.itemDescription} >{item.description}</li>
						</React.Fragment>
					))}
				</ul>
			</article>
		</div>
		<div className={styles.segment}>
			<article className={styles.beverageCategory}>
				<h2 className={styles.beveragesTitle} >para beber</h2>
				<ul className={styles.beveragesItemLeft}>
					{MenuList.beber.map(item => (
						<React.Fragment key={item.title}>
							<li className={styles.itemTitle} >{item.title}</li>
							<li className={styles.itemDescription} >{item.description}</li>
						</React.Fragment>
					))}
				</ul>
				<ul className={styles.beveragesItemRight}>
					{MenuList.semAlcool.map(item => (
						<React.Fragment key={item.title}>
							<li className={styles.itemTitle} >{item.title}</li>
						</React.Fragment>
					))}
				</ul>
			</article>
		</div>
	</React.Fragment>
)

export default Menu