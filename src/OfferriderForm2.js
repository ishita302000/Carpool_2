function OfferriderForm2()
{
    return (
		<div>
            <h1>Offer a Ride</h1>
            <h3>we get you the matches asap !</h3>
			<div className="inputs">
                <br/>
				<label className="label1">Stop 1</label>
				<br />
					
				<input
					type="text"
					placeholder="Stop 1"
					name="stop1"
					required
				/>
			</div>
			<br/>
			<div className="inputs">
				<label className="label1">Stop 2</label>
				<br />
				<input
					type="text"
					placeholder="Stop 2"
					name="stop2"
					required
				/>
			</div>
			<br/>
			<div className="inputs">
				<label className="label1">Stop 3</label>
				<br />
				<input
					type="text"
					placeholder="Stop 3"
					name="stop3"
					required
				/>
				<br />
			</div>
			<br/>
            <div className="inputs">
				<label className="label1">Available Seats</label>
				<br />
				<input
					placeholder="Seats"
					name="seat"
					required
				/>
				<br />
			</div>
            <br/>
            <div className="inputs">
				<label className="label1" >Price   </label>
                <label className="label2">  180$</label>
				<br />
			</div>
			<div>
                <br/>
				<button className='button'
					type="button"
					value="button"
				>
					Submit
				</button>
			</div>
		</div>
	);
}
export default OfferriderForm2;