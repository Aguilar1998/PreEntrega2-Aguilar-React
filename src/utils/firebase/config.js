import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    query,
    where
} from "firebase/getFirestore";


const firebaseConfig = {
    apiKey: "AIzaSyA7CQXMqETbLbL9Qz9No3g8vaWp5wBvrk8",
    authDomain: "react34870coderhouse.firebaseapp.com",
    projectId: "react34870coderhouse",
    storageBucket: "react34870coderhouse.appspot.com",
    messagingSenderId: "164804033283",
    appId: "1:164804033283:web:0b93213fbff98d3ac7c736",
    measurementId: "G-ZNL6TM7BD3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const db = getFirestore(app);


export async function getItems() {
    // Necesito una referencia a la coleccion 
    const producsCollectionRef = collection(db, "productos");
    // Pedirle a firebase los documentos de la coleccion
    const snapshot = await getDocs(producsCollectionRef)
    const docsData = snapshot.docs.map((doc) => {
        let dataOk = doc.data();
        dataOk.id = doc.id;
        return dataOk
    })

    return docsData
}



export async function getSingleItem(itemid) {
    // Necesito una referencia a la coleccion   
    const producsCollectionRef = collection(db, "productos");
    // referencia al documento
    const productRef = doc(producsCollectionRef, itemid); 

    //recibimos el snap del doc con getDoc(referencia)
    const snapshot = await getDoc(productRef)

    return{...snapshot.data(), id: snapshot.id}
}


export async function getItemsByCategory(categoria) {
    const producsCollectionRef = collection(db, "productos")

    const q = query(producsCollectionRef, where("categoria", "==", categoria));

    const snapshot = await getDocs(q)

    const docsData = snapshot.docs.map((doc) => {
        let dataOk = doc.data();
        dataOk.id = doc.id;
        return dataOk
    })
    return docsData
}