import { useState } from "react"


// --------------- Contador -------------//

const ItemCount = ({ initial = 1, stock = 10, text = 'Mes', onAdd }) => {
  
  const [count, setCount] = useState(initial)
  const [cantText, setCantText] = useState(text)


// ---------------Suma -------------//

  const handleSuma = () => {
    if (count < stock) {
      setCount(count + 1)
      setCantText('Meses')
    }
  }
// ---------------Resta -------------//

  const handleRestar = () => {
    if (count === 1) {
      setCantText(text)
    } else {
      setCount(count - 1)
    }
  }
// --------------- Agregar -------------//

  const handleOnAdd = () => {
    onAdd(count)
  }

  // ---------------Context nuevo-------------//
  return (
    <div className="flex flex-col w-full border-2 shadow-xl rounded-xl border-gray-300" >
      <div className="flex p-5 justify-around ">
        <div>
          <button className="border-2 pl-3 pr-3 border-gray-300 hover:text-white hover:bg-gray-800 hover:border-transparent  rounded-xl" onClick={handleSuma}> + </button>
        </div>
        <div>
          <center>
            <label>{count}{cantText}</label>
          </center>
        </div>
        <div>
          <button className="border-2 pl-3 pr-3 border-gray-300 hover:text-white hover:bg-gray-800 hover:border-transparent  rounded-xl bg-gray" onClick={handleRestar}> - </button>
        </div>
      </div>
      <div className="p-3 border-t-2 border-gray-300">
        <button className="m-auto flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium hover:text-black text-white hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 " onClick={handleOnAdd}>Contratar servicio</button>
      </div>
    </div>
  )
}

export default ItemCount



