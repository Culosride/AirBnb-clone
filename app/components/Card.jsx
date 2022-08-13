export default function Card(props) {
  let badgeText
  let cardClass
  if (props.spots === 0) {
    badgeText = "SOLD OUT !"
    cardClass = "card-openSpots-red"
  } else {
    badgeText = `OPEN SPOTS: ${props.spots}`
    cardClass = "card-openSpots"
  }

  return (
    <div className="card">
      <div className={cardClass}> {badgeText} </div>
      <img className="card-img" src={props.img} alt={props.alt} />
      <div className="card-text-wrapper">
        <p className="card-rating">⭐ {props.rating} ({props.reviews}) • {props.place}</p>
        <h3 className="card-desc">{props.desc}</h3>
      </div>
      <p>{props.number}</p>
      <p className="card-price">Price: {props.price} euri</p>
    </div>
  )
}
