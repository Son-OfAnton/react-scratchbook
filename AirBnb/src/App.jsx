import React from "react";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";


export default function App() {
	const cardData = data.map(cardField => 
		<Cards
			key={cardField.id}
			// {...cardField} remove item in cards.jsx
			cardField={cardField}
		/>
	)

	return (
		<div>
			<Navbar />
			<Hero />
			<section className="cards-list">
				{cardData}
			</section>
		</div>
  )
}