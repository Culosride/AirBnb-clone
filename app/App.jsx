import React from 'react'
import Navbar from '../app/components/Navbar.jsx'
import Hero from '../app/components/Hero.jsx'
import Card from '../app/components/Card.jsx'
import experiences from './fake apis/experiences.js'

export default function App() {
  const cards = experiences.map(ex => <Card
    key = {ex.id}
    img={ex.img}
    spots={ex.spots}
    rating={ex.rating}
    reviews={ex.reviews}
    place={ex.place}
    desc={ex.desc}
    price={ex.price}
    alt={ex.alt}
  />)

  return (
    <div className=''>
      <Navbar
        logo="app/assets/airbnb_logo.svg"
        alt="airbnb-logo"
      />
      <Hero />
      <section className="cards">
        {cards}
      </section>
    </div>
  )
}
