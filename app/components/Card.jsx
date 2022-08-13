export default function Card(props) {
  return (
    <div className="card">
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
