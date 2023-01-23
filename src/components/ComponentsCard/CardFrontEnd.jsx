import React from 'react'
import Card from './Card'

import img1 from '../../assets/img/FrontEnd/bootstrap-stack.png';
import img3 from '../../assets/img/FrontEnd/CodigoHTML.png';
import img2 from '../../assets/img/FrontEnd/JavaScript.png';
import img4 from '../../assets/img/FrontEnd/React-icon.svg.png';
import img5 from '../../assets/img/FrontEnd/Tailwind.png';
import img6 from '../../assets/img/FrontEnd/TypeScript.webp';



const objetoCardsFrontEnd = [
  {
    id: 1,
    image: img1,
    title: "hobie",
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    hashtag1: "Tenis",
    hashtag2: "Musica",
    hashtag3: "Entrenamiento"
  },
  {
    id: 2,
    image: img2,
    title: "Amazon",
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    hashtag1: "Almacenamiento",
    hashtag2: "Velocidad",
    hashtag3: "Orden"
  },
  {
    id: 3,
    image: img3,
    title: "Front-end",
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    hashtag1: "JavaScript",
    hashtag2: "React.js",
    hashtag3: "Node.js"
  },
  {
    id: 4,
    image: img4,
    title: "hobie",
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    hashtag1: "Tenis",
    hashtag2: "Musica",
    hashtag3: "Entrenamiento"
  },
  {
    id: 5,
    image: img5,
    title: "Amazon",
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    hashtag1: "Almacenamiento",
    hashtag2: "Velocidad",
    hashtag3: "Orden"
  },
  {
    id: 6,
    image: img6,
    title: "Front-end",
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    hashtag1: "JavaScript",
    hashtag2: "React.js",
    hashtag3: "Node.js"
  },
]


export default function CardsFrontEnd() {
  return (
    <div className='w-8/12 m-auto'>
      <div className="my-5 flex flex-wrap -mx-2 ">
        {
          objetoCardsFrontEnd.map(card => (
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
