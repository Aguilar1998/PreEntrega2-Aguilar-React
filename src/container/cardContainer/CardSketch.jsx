import React from 'react'
import Card from './Card'

// Rutas

import img1 from '../../assets/img/Sketch/Balsamiq.webp'
import img2 from '../../assets/img/Sketch/Figma.png'


// Array de objeto para renderizar las cartas referente a las aplicaciones de wireframe

const objetoCardsSketch = [
  {
    id: 1,
    image: img1,
    title: "Balsamiq",
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    hashtag1: "Desing",
    hashtag2: "Prototipo",
    hashtag3: "Pago"
  },
  {
    id: 2,
    image: img2,
    title: "Figma",
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    hashtag1: "Agilidad",
    hashtag2: "Desing",
    hashtag3: "Gratuito"
  }
]

// Llamado de Card

export default function CardsSketch() {
  return (
    <div className='w-8/12 m-auto'>
      <div className="my-5 flex m-auto flex-wrap -mx-2">
          {
            objetoCardsSketch.map(card => (
              <div className="sm:w-1/2 lg:w-1/3 px-2 my-2">
                <Card
                  id={card.id}
                  imageSource={card.image}
                  textDescription={card.text}
                  hashtagReferente1={card.hashtag1}
                  hashtagReferente2={card.hashtag2}
                  hashtagReferente3={card.hashtag3}
                />
              </div>
            ))
          }
    </div>
    </div>
  )
}
