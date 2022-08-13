export default function Card(props) {
  return (
    <div className="card">
      <div className={props.spots===0 && "card-openSpots-red" || props.spots > 0 && "card-openSpots" }>{props.spots === 0 && "SOLD OUT !" || props.spots > 0 && "OPEN SPOTS: " + props.spots}</div>
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
const cards = document.querySelectorAll(".cards")
console.log(cards)

cards.forEach(c => {
  console.log(c)
  if (c.innerText.includes("S"))
    c.classList.remove('card-openSpots')
    c.classList.add('card-openSpots-red')
  }
)
