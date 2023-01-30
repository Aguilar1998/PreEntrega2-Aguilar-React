
export const ItemDetail = ({producto}) => {
  return (
    <div>
          <div>
              <h2>{producto.name}</h2>
              <h4>{producto.categoria}</h4>
          </div>
          <p>producto.text</p>
    </div>
  )
}
