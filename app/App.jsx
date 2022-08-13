import React from 'react'
import Navbar from '../app/components/Navbar.jsx'
import Hero from '../app/components/Hero.jsx'
import Card from '../app/components/Card.jsx'

export default function App() {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <div className="cards">
        <Card
          img="app/assets/nana_turtle.jpg"
          rating="⭐ 5.0 (6) • Guantanamo"
          desc="Dinner with Nana Turtle"
          price="From $136 / person"
        />
        <Card
          img="app/assets/sultan.jpeg"
          rating="⭐ 5.0 (6) • Pakistan"
          desc="Life lessons with angry Sultan"
          price="From $136 / person"
        />
      </div>
    </div>
  )
}
