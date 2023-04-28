import pin from '/images/pin.png'

function Card(props) {
    return (
        <div className="card">
            <div className="image-container">
                <img className="image" src={props.imageUrl} alt={props.location} />
            </div>

            <div className="details-container">
                <img className="details-container--pin" src={pin} alt="location icon" />
                <p className="details-container--location">{props.location.toUpperCase()}</p>
                <a className="details-container--map-link" href={props.googleMapsUrl}>View on Google Maps</a>
                <h3 className="details-container--title">{props.title}</h3>
                <p className="details-container--date">{`${props.startDate} - ${props.endDate}`}</p>
                <p className="details-container--text">{props.description}</p>
            </div>
        </div>
    )
}

export default Card