import { useState } from 'react'

import FormList from './FormList'

import AnswersList from './AnswersList'

export default function Main() {
	const [open, setOpen] = useState(false) //Ignore this state

	return (
		<main className="main">
			<section className={`main__list ${open ? 'open' : ''}`}>
				<h2>Answers list</h2>
				{/* Use the AnswersList component here */}
			</section>
			<section className="main__form">
				<FormList />
			</section>
		</main>
	)
}
