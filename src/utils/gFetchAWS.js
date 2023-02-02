

import img7 from '../assets/img/AWS/AmazonRDS.png'
import img8 from '../assets/img/AWS/AWS_ElastiCache_Icon-1.png'
import img9 from '../assets/img/AWS/AmazonRoute53.png'
import img10 from'../assets/img/AWS/DynamoDB.png'
import img11 from'../assets/img/AWS/AmazonSQS.png'
import img12 from'../assets/img/AWS/AmazonEMR.png'

export const producto = [
    { id: 7,  categoria: "AWS",      image: img7,  title: "Amazon RDS",       text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'El Servicio de Bases de Datos Relacionales de Amazon es un servicio de base de datos relacional distribuido de Amazon Web Services. Es un servicio web que se ejecuta "en la nube" diseñado para simplificar la configuración, el funcionamiento y el escalado de una base de datos relacional para su uso en aplicaciones.', hashtag1: "Tenis",          hashtag2: "Musica",    hashtag3: "Entrenamiento"},
    { id: 8,  categoria: "AWS",      image: img8,  title: "AWS Elasti Cache", text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Amazon ElastiCache es un servicio de caché y almacenamiento de datos en memoria completamente administrado por Amazon Web Services. ', hashtag1: "Almacenamiento", hashtag2: "Velocidad", hashtag3: "Orden"},
    { id: 9,  categoria: "AWS",      image: img9,  title: "Amazon Route 53",  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Amazon Route 53 es un servicio de sistema de nombres de dominio escalable y de alta disponibilidad. Lanzado el 5 de diciembre de 2010, es parte de la plataforma de computación en la nube de Amazon.com, Amazon Web Services. El nombre es una posible referencia a rutas de EE.', hashtag1: "JavaScript",     hashtag2: "React.js",  hashtag3: "Node.js"},
    { id: 10, categoria: "AWS",      image: img10, title: "DynamoDB",         text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Amazon DynamoDB es un servicio de base de datos noSQL ofrecido por Amazon como parte de Amazon Web Services. DynamoDB expone un modelo de datos similar y deriva su nombre de Dynamo, pero tiene una implementación subyacente diferente.', hashtag1: "Tenis",          hashtag2: "Musica",    hashtag3: "Entrenamiento"},
    { id: 11, categoria: "AWS",      image: img11, title: "AmazonSQS",        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Amazon Simple Queue Service es un servicio de colas de mensajes distribuidos creado por Amazon.com y disponible a mediados de 2006. ​ Admite el envío programático de mensajes a través de aplicaciones de servicios web como una forma de comunicarse a través de Internet.', hashtag1: "Almacenamiento", hashtag2: "Velocidad", hashtag3: "Orden"},
    { id: 12, categoria: "AWS",      image: img12, title: "AmazonEMR",        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.', description:'Amazon EMR (anteriormente denominado Amazon Elastic) MapReduce) es una plataforma de clúster administrada que simplifica la ejecución de los marcos de trabajo de Big Data, tales comoApache Hadoop yApache Spark , enAWSpara procesar y analizar grandes cantidades de datos.', hashtag1: "JavaScript",     hashtag2: "React.js",  hashtag3: "Node.js"}
]



export const gFetchAWS = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id ? producto.find(prod => prod.id === parseInt(id)): producto)
        }, 1000)
    })
}



