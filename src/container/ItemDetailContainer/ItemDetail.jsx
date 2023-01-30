
export const ItemDetail = ({producto}) => {
  return (
    <center className="flex flex-col">
          <div className="flex flex-col">
              <h2>{producto.title}titulo</h2>
              <h4>{producto.categoria}categoria</h4>
          </div>
          <p>{producto.text}texto</p>
    </center>
  )
}
