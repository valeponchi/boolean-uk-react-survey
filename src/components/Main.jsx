import { useState } from 'react'

import Form from './Form'
import AnswersList from './AnswersList'

const initialFormInput = {
	username: '',
	email: '',
	bestFeatures: [],
	worstFeatures: [],
	consistency: '',
	colour: '',
	logo: '',
	timeSpent: [],
	review: '',
}

// uncontrolled-form features:
// const worstFeatures = [...target.worstFeatures].filter(item => item.checked). map(item => item.value)
// const bestFeatures = [...target.bestFeatures].filter(item => item.checked). map(item => item.value)
// const timeSpent = [...target.timeSpent].filter(item => item.checked). map(item => item.value)

export default function Main() {
	const [open, setOpen] = useState(false) //Ignore this state

	const [answersList, setAnswersList] = useState([])
	const [answerInputs, setAnswerInputs] = useState(initialFormInput)

	function addAnswer(answer) {
		setAnswersList([...answersList, answer])
	}

	function handleSubmit(e) {
		e.preventDefault()
		addAnswer(answerInputs)
		setAnswerInputs(initialFormInput)
	}

	function handleChange(e) {
		// console.log(e)
		setAnswerInputs({
			...answerInputs,
			[e.target.name]: e.target.value,
		})
	}

	function handleCheckboxChange(e) {
		//if the checkbox is checked(turnery)
		const unpdatedArray = e.target.checked
			? [...answerInputs[e.target.name], e.target.value]
			: answerInputs[e.target.name].filter(item => item !== e.target.value)

		setAnswerInputs({ ...answerInputs, [e.target.name]: unpdatedArray })
	}

	return (
		<main className="main">
			<section className={`main__list ${open ? 'open' : ''}`}>
				<h2>Answers list</h2>
				<AnswersList answersList={answersList} />
				{/* Use the AnswersList component here */}
			</section>

			<section className="main__form">
				<Form
					handleSubmit={handleSubmit}
					answersList={answersList}
					answerInputs={answerInputs}
					handleChange={handleChange}
					setAnswerInputs={setAnswerInputs}
					handleCheckboxChange={handleCheckboxChange}
				/>
			</section>
		</main>
	)
}
