import img1 from '../assets/img/FrontEnd/bootstrap-stack.png';
import img3 from '../assets/img/FrontEnd/CodigoHTML.png';
import img2 from '../assets/img/FrontEnd/JavaScript.png';
import img4 from '../assets/img/FrontEnd/React-icon.svg.png';
import img5 from '../assets/img/FrontEnd/Tailwind.png';
import img6 from '../assets/img/FrontEnd/TypeScript.webp';
import img7 from '../assets/img/AWS/AmazonRDS.png'
import img8 from '../assets/img/AWS/AWS_ElastiCache_Icon-1.png'
import img9 from '../assets/img/AWS/AmazonRoute53.png'
import img10 from'../assets/img/AWS/DynamoDB.png'
import img11 from'../assets/img/AWS/AmazonSQS.png'
import img12 from'../assets/img/AWS/AmazonEMR.png'
import img13 from'../assets/img/Sketch/Balsamiq.webp'
import img14 from'../assets/img/Sketch/Figma.png'


export const producto = [
    { id: 1,  categoria: "FrontEnd", image: img1,  title: "Bootstrap",        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Libreria",       hashtag2: "Framework", hashtag3: "CSS"},
    { id: 2,  categoria: "FrontEnd",  image: img2, title: "JavaScript",       text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Almacenamiento", hashtag2: "Velocidad", hashtag3: "Orden"},
    { id: 3,  categoria: "FrontEnd", image: img3,  title: "HTML",             text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "JavaScript",     hashtag2: "React.js",  hashtag3: "Node.js"},
    { id: 4,  categoria: "FrontEnd", image: img4,  title: "React.js",         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Tenis",          hashtag2: "Musica",    hashtag3: "Entrenamiento"},
    { id: 5,  categoria: "FrontEnd", image: img5,  title: "Tailwind",         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Almacenamiento", hashtag2: "Velocidad", hashtag3: "Orden"},
    { id: 6,  categoria: "FrontEnd", image: img6,  title: "TypeScript",       text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "JavaScript",     hashtag2: "React.js",  hashtag3: "Node.js"},
    { id: 7,  categoria: "AWS",      image: img7,  title: "Amazon RDS",       text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Tenis",          hashtag2: "Musica",    hashtag3: "Entrenamiento"},
    { id: 8,  categoria: "AWS",      image: img8,  title: "AWS Elasti Cache", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Almacenamiento", hashtag2: "Velocidad", hashtag3: "Orden"},
    { id: 9,  categoria: "AWS",      image: img9,  title: "Amazon Route 53",  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "JavaScript",     hashtag2: "React.js",  hashtag3: "Node.js"},
    { id: 10, categoria: "AWS",      image: img10, title: "DynamoDB",         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Tenis",          hashtag2: "Musica",    hashtag3: "Entrenamiento"},
    { id: 11, categoria: "AWS",      image: img11, title: "AmazonSQS",        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Almacenamiento", hashtag2: "Velocidad", hashtag3: "Orden"},
    { id: 12, categoria: "AWS",      image: img12, title: "AmazonEMR",        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "JavaScript",     hashtag2: "React.js",  hashtag3: "Node.js"},
    { id: 13, categoria: "Wireframe",image: img13, title: "Balsamiq",         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Desing",         hashtag2: "Prototipo", hashtag3: "Pago"},
    { id: 14, categoria: "Wireframe",image: img14, title: "Figma",            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Agilidad",       hashtag2: "Desing",    hashtag3: "Gratuito"}  
]



export const gFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id ? producto.find(prod => prod.id === parseInt(id)): producto)
        }, 1000)
    })
}