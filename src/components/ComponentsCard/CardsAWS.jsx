import React from 'react'
import Card from './Card'

import img1 from '../../assets/img/AWS/AmazonRDS.png'
import img3 from '../../assets/img/AWS/AWS_ElastiCache_Icon-1.png'
import img2 from '../../assets/img/AWS/AmazonRoute53.png'
import img4 from '../../assets/img/AWS/DynamoDB.png'
import img5 from '../../assets/img/AWS/AmazonSQS.png'
import img6 from '../../assets/img/AWS/AmazonEMR.png'



const objetoCards = [
  {
    id: 1,
    image: img1,
    title: "Amazon RDS",
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


export default function CardsAWS() {
  return (
    <div className="my-5 flex m-auto flex-wrap -mx-2 ">
          {
            objetoCards.map(card => (
              <div className=" sm:w-1/2 lg:w-1/3 px-2 my-2">
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
  )
}
