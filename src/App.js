import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import Historia from './components/Pages/Historia/Historia'
import Programacao from './components/Pages/Programacao/Programacao'
import Galeria from './components/Pages/Galeria/Galeria'
import Cardapio from './components/Pages/Cardapio/Cardapio'
import Informacoes from './components/Pages/Informacoes/Informacoes'
import Monday from './components/Pages/SchedulePages/Monday'
import Tuesday from './components/Pages/SchedulePages/Tuesday'
import Wednesday from './components/Pages/SchedulePages/Wednesday'
import Thursday from './components/Pages/SchedulePages/Thursday'
import Friday from './components/Pages/SchedulePages/Friday'
import Sunday from './components/Pages/SchedulePages/Sunday'
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
				<Route path="/Monday" component={Monday} />
				<Route path="/Tuesday" component={Tuesday} />
				<Route path="/Wednesday" component={Wednesday} />
				<Route path="/Thursday" component={Thursday} />
				<Route path="/Friday" component={Friday} />
				<Route path="/Sunday" component={Sunday} />
			</Switch>
		</main>
		<Footer />
	</Fragment>
)

export default App