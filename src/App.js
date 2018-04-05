import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import Historia from './components/Pages/Historia/Historia'
import Programacao from './components/Pages/Programacao/Programacao'
import Galeria from './components/Pages/Galeria/Galeria'
import Cardapio from './components/Pages/Cardapio/Cardapio'
import Informacoes from './components/Pages/Informacoes/Informacoes'

const App = () => (
	<main>
		<Navbar />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/historia" component={Historia} />
			<Route path="/programacao" component={Programacao} />
			<Route path="/galeria" component={Galeria} />
			<Route path="/cardapio" component={Cardapio} />
			<Route path="/informacoes" component={Informacoes} />
		</Switch>
	</main>
)

export default App