
import img1 from '../assets/img/FrontEnd/bootstrap-stack.png';
import img3 from '../assets/img/FrontEnd/CodigoHTML.png';
import img2 from '../assets/img/FrontEnd/JavaScript.png';
import img4 from '../assets/img/FrontEnd/React-icon.svg.png';
import img5 from '../assets/img/FrontEnd/Tailwind.png';
import img6 from '../assets/img/FrontEnd/TypeScript.webp';


export const producto = [
    { id: 1,  categoria: "FrontEnd", image: img1,  title: "Bootstrap",        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Tenis",          hashtag2: "Musica",    hashtag3: "Entrenamiento"},
    { id: 2,  categoria:"FrontEnd",  image: img2,  title: "JavaScript",       text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Almacenamiento", hashtag2: "Velocidad", hashtag3: "Orden"},
    { id: 3,  categoria: "FrontEnd", image: img3,  title: "HTML",             text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "JavaScript",     hashtag2: "React.js",  hashtag3: "Node.js"},
    { id: 4,  categoria: "FrontEnd", image: img4,  title: "React.js",         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Tenis",          hashtag2: "Musica",    hashtag3: "Entrenamiento"},
    { id: 5,  categoria: "FrontEnd", image: img5,  title: "Amazon",           text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Almacenamiento", hashtag2: "Velocidad", hashtag3: "Orden"},
    { id: 6,  categoria: "FrontEnd", image: img6,  title: "TypeScript",       text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "JavaScript",     hashtag2: "React.js",  hashtag3: "Node.js"},  
]



export const gFetchFrontEnd = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id ? producto.find(prod => prod.id === parseInt(id)): producto)
        }, 1000)
    })
}



