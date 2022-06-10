import React from "react";
function OfferriderForm()
{
    let timings = [
		{ start: 5, end: 9, beforeNoon: true },
		{ start: 9, end: 12, beforeNoon: true },
		{ start: 12, end: 3, beforeNoon: false },
		{ start: 3, end: 6, beforeNoon: false },
		{ start: 6, end: 9, beforeNoon: false },
	];
    return(
        <div>
            <h1>Offer a Ride</h1>
            <h3>we get you the matches asap !</h3>
            <div className="inputs">
                <br/>
				<label className="label1">From</label>
				<br />
					
				<input
					type="text"
					placeholder="Start Point"
					name="source"
					// onChange={(e) => fillForm(e)}
					required
				/>
			</div>
			<br/>
			<div className="inputs">
				<label className="label1">To</label>
				<br />
				<input
					type="text"
					placeholder="End Point"
					name="destination"
					// onChange={(e) => fillForm(e)}
					required
				/>
			</div>
			<br/>
			<div className="inputs">
				<label className="label1">Date</label>
				<br />
				<input
					type="date"
					placeholder="xx/mm/yyyy"
					name="date"
					// onChange={(e) => fillForm(e)}
					required
				/>
				<br />
			</div>
			<br/>
			<div className="time-selection">
				<label className="label1">Time</label>
				<select >
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
			<br/>
            <br/>
			<div className="inputs">
				<label className="next">Next</label>
				<br />
				
				<br />
			</div>
			<div>
				
			</div>
        </div>
    );
}
export default OfferriderForm;