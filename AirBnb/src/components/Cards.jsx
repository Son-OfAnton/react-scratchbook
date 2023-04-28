import star from '/images/star.png'

export default function Card(props) {
    let badgeText

    if (props.cardField.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.cardField.country === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img className='card--image' src={'/images/'.concat(props.cardField.coverImg)} alt="" />

            <div className='card--stats'>
                <img className='card--star' src={star} alt="" />
                <span>{props.cardField.stats.rating}</span>
                <span className='gray'>({props.cardField.stats.reviewCount}) . </span>
                <span className='gray'>{props.cardField.location}</span>
            </div>
            <p className='card--title'>{props.cardField.title}</p>
            <p className='card--price'><span className='bold'>From ${props.cardField.price}</span> / person</p>
        </div>
    )
}