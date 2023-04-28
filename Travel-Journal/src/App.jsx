import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'

function App() {
	const countyCard = data.map(cardInfo =>
		<Card
			{...cardInfo}
		/>
		)
	console.log(countyCard)
	return(
		<div className='page'>
			<Navbar/>
			{countyCard}
		</div>
	)
}

export default App