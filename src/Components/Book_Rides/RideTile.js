

function RideTile(props) {
    const item = props.info;
    return (
        <div className="container-matche" onClick={() => props.onClick()}>
         
            <div className="split-in-two">
                <h1>Anchal </h1>
                <div>
                    <br/>
                    <label className="label">From</label><br />
                    {item.from}
                </div>
                <br/>
                <div>
                    <label className="label">To</label><br />
                    {item.to}
                </div>
                <br/>
                <div>
                    <label className="label">Date</label><br />
                    {item.date}
                </div>
                <br/>
                <div>
                    <label className="label">Time</label><br />
                    {item.time}
                </div>
                <br/>
                <div>
                    <label className="label">Price</label><br />
                    {item.price};
                </div>
                <br/>
                <div>
                <label className="label">Seats</label><br />
                {item.seats};
                </div>
               
            </div>
        </div>
    );
}

export default RideTile;