
import img13 from'../assets/img/Sketch/Balsamiq.webp'
import img14 from'../assets/img/Sketch/Figma.png'

export const producto = [
    { id: 13, categoria: "Wireframe",image: img13, title: "Balsamiq",  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Desing",         hashtag2: "Prototipo", hashtag3: "Pago"},
    { id: 14, categoria: "Wireframe",image: img14, title: "Figma",     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Mi descripcion', hashtag1: "Agilidad",       hashtag2: "Desing",    hashtag3: "Gratuito"}  
]
   



export const gFetchSketch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id ? producto.find(prod => prod.id === parseInt(id)): producto)
        }, 1000)
    })
}
