import React from 'react'
import Navbar from '../app/components/Navbar.jsx'
import Hero from '../app/components/Hero.jsx'
import Card from '../app/components/Card.jsx'

export default function App() {
  return (
    <div className=''>
      <Navbar
        logo="app/assets/airbnb_logo.svg"
        alt="airbnb-logo"
      />
      <Hero />

      <div className="cards">
        <Card
          img="app/assets/nana_turtle.jpg"
          rating={3.9}
          reviews = {6}
          place = "Guantanamo"
          desc="Dinner with Nana Turtle"
          price={136}
          alt="nana_turtle"
        />
        <Card
          img="app/assets/sultan.jpeg"
          rating={4.8}
          reviews = {29}
          place = "Pakistan"
          desc="Life lessons with angry Sultan"
          price={136}
          alt="sultan"
        />
      </div>
    </div>
  )
}
