import React from 'react';
import { useState } from 'react';

const BookRiderForm = (props) => {
	let timings = [
		{ start: 5, end: 9, beforeNoon: true },
		{ start: 9, end: 12, beforeNoon: true },
		{ start: 12, end: 3, beforeNoon: false },
		{ start: 3, end: 6, beforeNoon: false },
		{ start: 6, end: 9, beforeNoon: false },
	];

	// let [selectedTimeslot, setSelectedTimeslot] = useState(0);

	// let formParameters = {
	// 	source: '',
	// 	destination: '',
	// 	date: '',
	// 	timeslot: -1,
	// };

	// // const fillDetails = (field, value) => {
	// // 	formParameters[field] = value;
	// // };

	const fillForm = (event) => {
		let field = event.target.name; // user input
		let value = event.target.value;
		props.fillDetails(field, value);
	};

	const setTimeslot = (e) => {
		// setSelectedTimeslot(e.target.value);
		props.fillDetails('timeslot', e.target.value);
	};

	return (
		<div>
			<div className="inputs">
				<label>From</label>
				<br />
				<input
					type="text"
					placeholder="Start Point"
					name="source"
					onChange={(e) => fillForm(e)}
					required
				/>
			</div>
			<div className="inputs">
				<label>To</label>
				<br />
				<input
					type="text"
					placeholder="End Point"
					name="destination"
					onChange={(e) => fillForm(e)}
					required
				/>
			</div>
			<div className="inputs">
				<label>Date</label>
				<br />
				<input
					type="date"
					placeholder="xx/mm/yyyy"
					name="date"
					onChange={(e) => fillForm(e)}
					required
				/>
				<br />
			</div>

			<div className="time-selection">
				<label>Time</label>
				<select onChange={(e) => setTimeslot(e)}>
					{timings.map((item,pos) => {
						return (
							<option
								key={pos}
								value={pos+1}
							>
								{item.start}
								{item.beforeNoon ? 'am' : 'pm'} - {item.end}
								{item.beforeNoon
									? item.end === 12
										? 'pm'
										: 'am'
									: item.end === 12
									? 'am'
									: 'pm'}
							</option>
						);
					})}
				</select>
			</div>

			<div>
				<button
					type="button"
					value="button"
					onClick={ (e) => props.onSubmit(e) }
				>
					Submit
				</button>
			</div>
		</div>
	);
};

export default BookRiderForm;
