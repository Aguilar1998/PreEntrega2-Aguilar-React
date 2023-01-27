import Card from "./Card"

// archivo para renderizar todas las card 
export default function CardContainerList (productos){
    return (
        productos.map(producto => (

            <div className="sm:w-1/2 lg:w-1/3 px-2 my-2">
                
                <Card
                    productos={productos}
                />

            </div>
        ))

    )
}

