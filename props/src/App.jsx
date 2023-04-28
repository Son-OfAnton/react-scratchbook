import Joke from "./Joke";
import joikesData from "./joikesData";
import './index.css'


export default function App() {
	const jokeElements = joikesData.map(joke => {
		return <Joke
			setup={joke.setup}
			punchline={joke.punchline}
		/>
	})


	return (
		<div>
			{jokeElements}
		</div>
	)
}