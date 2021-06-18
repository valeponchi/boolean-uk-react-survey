import { useState } from 'react'

import FormList from './FormList'

import AnswersList from './AnswersList'

const initialFormInput = {
	username: '',
	email: '',
	bestFeatures: '',
	worstFeatures: '',
	consistency: '',
	colour: '',
	logo: '',
	timeSpent: '',
	review: '',
}

export default function Main() {
	const [open, setOpen] = useState(false) //Ignore this state

	const [answers, setAnswers] = useState([])
	const [formInputs, setFormInputs] = useState(initialFormInput)

	function addAnswer(answer) {
		setAnswers([...answers, answer])
	}

	function handleSubmit(e) {
		e.preventDefault()
		addAnswer(formInputs)
		setFormInputs(initialFormInput)
	}

	function handleChange(e) {
		console.log(e)
		setFormInputs({
			...formInputs,
      (checked) ?
			[e.target.name]: e.target.value,
		})
	}

	return (
		<main className="main">
			<section className={`main__list ${open ? 'open' : ''}`}>
				<h2>Answers list</h2>
				{/* <AnswersList /> */}
				{/* Use the AnswersList component here */}
			</section>

			<section className="main__form">
				<FormList
					handleSubmit={handleSubmit}
					formInputs={formInputs}
					handleChange={handleChange}
					setFormInputs={setFormInputs}
				/>
			</section>
		</main>
	)
}
