export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.img} alt="" />
      <div className="card-text-wrapper">
        <p className="">{props.rating}</p>
        <p>{props.desc}</p>
      </div>
      <p className="card-price">{props.price}</p>
    </div>
  )
}
