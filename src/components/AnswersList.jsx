import AnswersItem from './AnswersItem'

function AnswersList({ answersList }) {
	return (
		<ul>
			{answersList.map((answerItem, i) => (
				<AnswersItem answerItem={answerItem} key={i} />
			))}
		</ul>
	)
}

export default AnswersList
