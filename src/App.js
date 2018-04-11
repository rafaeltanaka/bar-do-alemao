import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
<<<<<<< HEAD
import Home from './pages/Home/Home'
import Historia from './pages/Historia/Historia'
import Programacao from './pages/Programacao/Programacao'
import Galeria from './pages/Galeria/Galeria'
import Cardapio from './pages/Cardapio/Cardapio'
import Informacoes from './pages/Informacoes/Informacoes'
=======
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
>>>>>>> 7366caaf5169c2138f5c09b9beb2f58e922739f9
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