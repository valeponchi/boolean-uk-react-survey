function FormList({ setFormInputs, handleSubmit, formInputs, handleChange }) {
	return (
		<form className="form" onSubmit={handleSubmit}>
			<h2>Tell us what you think about your rubber duck!</h2>

			{/* NAME  */}
			<label>
				Put your name here (if you feel like it):
				<input
					type="text"
					name="username"
					value={formInputs.username}
					required
					onChange={e =>
						setFormInputs({ ...formInputs, username: e.target.value })
					}
				/>
			</label>

			{/* EMAIL  */}
			<label>
				Leave us your email pretty please??
				<input
					type="email"
					name="email"
					value={formInputs.email}
					required
					onChange={e =>
						setFormInputs({ ...formInputs, email: e.target.value })
					}
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
								// we need to know which one is checked
								checked={formInputs.bestFeatures === 'colour' ? true : false}
								onChange={handleChange}
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
								checked={formInputs.bestFeatures === 'sound' ? true : false}
								onChange={handleChange}
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
								checked={formInputs.bestFeatures === 'logo' ? true : false}
								onChange={handleChange}
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
								checked={formInputs.bestFeatures === 'size' ? true : false}
								onChange={handleChange}
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
								checked={formInputs.worstFeatures === 'colour' ? true : false}
								onChange={handleChange}
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
								checked={formInputs.worstFeatures === 'sound' ? true : false}
								onChange={handleChange}
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
								checked={formInputs.worstFeatures === 'logo' ? true : false}
								onChange={handleChange}
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
								checked={formInputs.worstFeatures === 'size' ? true : false}
								onChange={handleChange}
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
							checked={formInputs.consistency === '1' ? true : false}
							onChange={handleChange}
						/>
						<label html="consistency1">1</label>
					</li>
					<li>
						<input
							id="consistency2"
							type="radio"
							name="consistency"
							value="2"
							checked={formInputs.consistency === '2' ? true : false}
							onChange={handleChange}
						/>
						<label html="consistency2">2</label>
					</li>
					<li>
						<input
							id="consistency3"
							type="radio"
							name="consistency"
							value="3"
							checked={formInputs.consistency === '3' ? true : false}
							onChange={handleChange}
						/>
						<label html="consistency3">3</label>
					</li>
					<li>
						<input
							id="consistency4"
							type="radio"
							name="consistency"
							value="4"
							checked={formInputs.consistency === '4' ? true : false}
							onChange={handleChange}
						/>
						<label html="consistency4">4</label>
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
							checked={formInputs.colour === '1' ? true : false}
							onChange={handleChange}
						/>
						<label html="colour1">1</label>
					</li>
					<li>
						<input
							id="colour2"
							type="radio"
							name="colour"
							value="2"
							checked={formInputs.colour === '2' ? true : false}
							onChange={handleChange}
						/>
						<label html="colour2">2</label>
					</li>
					<li>
						<input
							id="colour3"
							type="radio"
							name="colour"
							value="3"
							checked={formInputs.colour === '3' ? true : false}
							onChange={handleChange}
						/>
						<label html="colour3">3</label>
					</li>
					<li>
						<input
							id="colour4"
							type="radio"
							name="colour"
							value="4"
							checked={formInputs.colour === '4' ? true : false}
							onChange={handleChange}
						/>
						<label html="colour4">4</label>
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
							checked={formInputs.logo === '1' ? true : false}
							required
							onChange={handleChange}
						/>
						<label html="logo1">1</label>
					</li>
					<li>
						<input
							id="logo2"
							type="radio"
							name="logo"
							value="2"
							checked={formInputs.logo === '2' ? true : false}
							onChange={handleChange}
						/>
						<label html="logo2">2</label>
					</li>
					<li>
						<input
							id="logo3"
							type="radio"
							name="logo"
							value="3"
							checked={formInputs.logo === '3' ? true : false}
							onChange={handleChange}
						/>
						<label html="logo3">3</label>
					</li>
					<li>
						<input
							id="logo4"
							type="radio"
							name="logo"
							value="4"
							checked={formInputs.logo === '4' ? true : false}
							onChange={handleChange}
						/>
						<label html="logo4">4</label>
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
								checked={formInputs.timeSpent === 'swimming' ? true : false}
								onChange={handleChange}
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
								checked={formInputs.timeSpent === 'bathing' ? true : false}
								onChange={handleChange}
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
								checked={formInputs.timeSpent === 'chatting' ? true : false}
								onChange={handleChange}
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
								checked={formInputs.timeSpent === 'noTime' ? true : false}
								onChange={handleChange}
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
					value={formInputs.review}
					onChange={handleChange}></textarea>
			</label>

			<input className="form__submit" type="submit" value="Submit Survey!" />
		</form>
	)
}

export default FormList

{
	/* FORM ▶ STATE ▶ handleChange = {...inputs, e.t.name = e.t.value } */
}
{
	/* STATE ▶ FORM ▶ value='inputs.bla' name='bla'  */
}
