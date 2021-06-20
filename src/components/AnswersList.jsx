import AnswersItem from './AnswersItem'

function AnswersList({ answersList }) {
	return (
		<ul>
			{answersList.map((answerItem, index) => (
				<AnswersItem answerItem={answerItem} index={index} />
			))}
		</ul>
	)
}

export default AnswersList
