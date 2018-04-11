import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Historia from './pages/Historia/Historia'
import Programacao from './pages/Programacao/Programacao'
import Galeria from './pages/Galeria/Galeria'
import Cardapio from './pages/Cardapio/Cardapio'
import Informacoes from './pages/Informacoes/Informacoes'
import Footer from './components/Footer/Footer'

const App = () => (
	<Fragment>
		<Navbar />
		<main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/historia" component={Historia} />
				<Route path="/programacao" component={Programacao} />
				<Route path="/galeria" component={Galeria} />
				<Route path="/cardapio" component={Cardapio} />
				<Route path="/informacoes" component={Informacoes} />
			</Switch>
		</main>
		<Footer />
	</Fragment>
)

export default App