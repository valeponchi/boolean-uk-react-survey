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

function Form({
	handleCheckboxChange,
	handleSubmit,
	answerInputs,
	handleChange,
	// answersList,
}) {
	return (
		<form className="form" onSubmit={handleSubmit}>
			<h2>Tell us what you think about your rubber duck!</h2>

			{/* NAME  */}
			<label>
				Put your name here (if you feel like it):
				<input
					type="text"
					name="username"
					value={answerInputs.username}
					required
					onChange={handleChange}
				/>
			</label>

			{/* EMAIL  */}
			<label>
				Leave us your email pretty please??
				<input
					type="email"
					name="email"
					value={answerInputs.email}
					required
					onChange={handleChange}
				/>
			</label>

			{/* CHECKBOXES BEST FEATURES  */}
			<div className="form__group">
				<h3>
					What would you say that are the best features of your rubber duck?
				</h3>
				<ul>
					<li>
						<label>
							<input
								name="bestFeatures"
								type="checkbox"
								value="colour"
								checked={answerInputs.bestFeatures.includes('colour')}
								onChange={handleCheckboxChange}
							/>
							It's yellow!
						</label>
					</li>
					<li>
						<label>
							<input
								name="bestFeatures"
								type="checkbox"
								value="sound"
								checked={answerInputs.bestFeatures.includes('sound')}
								onChange={handleCheckboxChange}
							/>
							It squeaks!
						</label>
					</li>
					<li>
						<label>
							<input
								name="bestFeatures"
								type="checkbox"
								value="logo"
								checked={answerInputs.bestFeatures.includes('logo')}
								onChange={handleCheckboxChange}
							/>
							It has a logo!
						</label>
					</li>
					<li>
						<label>
							<input
								name="bestFeatures"
								type="checkbox"
								value="size"
								checked={answerInputs.bestFeatures.includes('size')}
								onChange={handleCheckboxChange}
							/>
							Its big!
						</label>
					</li>
				</ul>
			</div>

			{/* CHECKBOXES WORST FEATURES */}
			<div className="form__group">
				<h3>What would you say that are the worst bits of your rubber duck?</h3>
				<ul>
					<li>
						<label>
							<input
								name="worstFeatures"
								type="checkbox"
								value="colour"
								// we need to know which one is checked
								checked={answerInputs.worstFeatures.includes('colour')}
								onChange={handleCheckboxChange}
							/>
							It's yellow!
						</label>
					</li>
					<li>
						<label>
							<input
								name="worstFeatures"
								type="checkbox"
								value="sound"
								checked={answerInputs.worstFeatures.includes('sound')}
								onChange={handleCheckboxChange}
							/>
							It squeaks!
						</label>
					</li>
					<li>
						<label>
							<input
								name="worstFeatures"
								type="checkbox"
								value="logo"
								checked={answerInputs.worstFeatures.includes('logo')}
								onChange={handleCheckboxChange}
							/>
							It has a logo!
						</label>
					</li>
					<li>
						<label>
							<input
								name="worstFeatures"
								type="checkbox"
								value="size"
								checked={answerInputs.worstFeatures.includes('size')}
								onChange={handleCheckboxChange}
							/>
							Its big!
						</label>
					</li>
				</ul>
			</div>

			{/* RADIO CONSISTENCY */}
			<div className="form__group radio">
				<h3>How do you rate your rubber duck consistency?</h3>
				<ul>
					<li>
						<input
							id="consistency1"
							type="radio"
							name="consistency"
							value="1"
							// we need to know which one is checked
							checked={answerInputs.consistency === '1'}
							onChange={handleChange}
						/>
						<label htmlFor="consistency1">1</label>
					</li>
					<li>
						<input
							id="consistency2"
							type="radio"
							name="consistency"
							value="2"
							checked={answerInputs.consistency === '2'}
							onChange={handleChange}
						/>
						<label htmlFor="consistency2">2</label>
					</li>
					<li>
						<input
							id="consistency3"
							type="radio"
							name="consistency"
							value="3"
							checked={answerInputs.consistency === '3'}
							onChange={handleChange}
						/>
						<label htmlFor="consistency3">3</label>
					</li>
					<li>
						<input
							id="consistency4"
							type="radio"
							name="consistency"
							value="4"
							checked={answerInputs.consistency === '4'}
							onChange={handleChange}
						/>
						<label htmlFor="consistency4">4</label>
					</li>
				</ul>
			</div>

			{/* RADIO COLOUR */}
			<div className="form__group radio">
				<h3>How do you rate your rubber duck colour?</h3>
				<ul>
					<li>
						<input
							id="colour1"
							type="radio"
							name="colour"
							value="1"
							// we need to know which one is checked
							checked={answerInputs.colour === '1'}
							onChange={handleChange}
						/>
						<label htmlFor="colour1">1</label>
					</li>
					<li>
						<input
							id="colour2"
							type="radio"
							name="colour"
							value="2"
							checked={answerInputs.colour === '2'}
							onChange={handleChange}
						/>
						<label htmlFor="colour2">2</label>
					</li>
					<li>
						<input
							id="colour3"
							type="radio"
							name="colour"
							value="3"
							checked={answerInputs.colour === '3'}
							onChange={handleChange}
						/>
						<label htmlFor="colour3">3</label>
					</li>
					<li>
						<input
							id="colour4"
							type="radio"
							name="colour"
							value="4"
							checked={answerInputs.colour === '4'}
							onChange={handleChange}
						/>
						<label htmlFor="colour4">4</label>
					</li>
				</ul>
			</div>

			{/* RADIO LOGO */}
			<div className="form__group radio">
				<h3>How do you rate your rubber duck logo?</h3>
				<ul>
					<li>
						<input
							id="logo1"
							type="radio"
							name="logo"
							value="1"
							// we need to know which one is checked
							checked={answerInputs.logo === '1'}
							required
							onChange={handleChange}
						/>
						<label htmlFor="logo1">1</label>
					</li>
					<li>
						<input
							id="logo2"
							type="radio"
							name="logo"
							value="2"
							checked={answerInputs.logo === '2'}
							onChange={handleChange}
						/>
						<label htmlFor="logo2">2</label>
					</li>
					<li>
						<input
							id="logo3"
							type="radio"
							name="logo"
							value="3"
							checked={answerInputs.logo === '3'}
							onChange={handleChange}
						/>
						<label htmlFor="logo3">3</label>
					</li>
					<li>
						<input
							id="logo4"
							type="radio"
							name="logo"
							value="4"
							checked={answerInputs.logo === '4'}
							onChange={handleChange}
						/>
						<label htmlFor="logo4">4</label>
					</li>
				</ul>
			</div>

			{/* CHECKBOX SPEND-TIME */}
			<div className="form__group">
				<h3>How do you like to spend time with your rubber duck</h3>
				<ul>
					<li>
						<label>
							<input
								name="timeSpent"
								type="checkbox"
								value="swimming"
								// we need to know which one is checked
								checked={answerInputs.timeSpent.includes('swimming')}
								onChange={handleCheckboxChange}
							/>
							Swimming
						</label>
					</li>
					<li>
						<label>
							<input
								name="timeSpent"
								type="checkbox"
								value="bathing"
								checked={answerInputs.timeSpent.includes('bathing')}
								onChange={handleCheckboxChange}
							/>
							Bathing
						</label>
					</li>
					<li>
						<label>
							<input
								name="timeSpent"
								type="checkbox"
								value="chatting"
								checked={answerInputs.timeSpent.includes('chatting')}
								onChange={handleCheckboxChange}
							/>
							Chatting
						</label>
					</li>
					<li>
						<label>
							<input
								name="timeSpent"
								type="checkbox"
								value="noTime"
								checked={answerInputs.timeSpent.includes('noTime')}
								onChange={handleCheckboxChange}
							/>
							I don't like to spend time with it
						</label>
					</li>
				</ul>
			</div>

			{/* REVIEW SECTION */}
			<label>
				What else have you got to say about your rubber duck?
				<textarea
					name="review"
					cols="30"
					rows="10"
					value={answerInputs.review}
					onChange={handleChange}></textarea>
			</label>

			<input className="form__submit" type="submit" value="Submit Survey!" />
		</form>
	)
}

export default Form

{
	/* FORM ▶ STATE ▶ handleChange = {...inputs, e.t.name = e.t.value } */
}
{
	/* STATE ▶ FORM ▶ value='inputs.bla' name='bla'  */
}
