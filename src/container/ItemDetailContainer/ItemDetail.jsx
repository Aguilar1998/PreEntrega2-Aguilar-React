export const ItemDetail = ({ producto }) => {

  return (
    <div className='flex flex-row justify-center w-3/4 m-auto mt-32 border-gray-200 rounded-lg border-2 p-14'>
      <img src={producto.image} alt="" className='w-2/5 padding-5 shadow-2xl rounded-xl	h-1/2	 p-0.5 ' />
      <div className="px-6 py-4 flex flex-col justify-around">
        <div className="font-light text-xl mb-2">{producto.categoria}</div>
        <div className="font-bold text-2xl mb-2">{producto.title}</div>
        <p className="text-gray-700 text-base">
          {producto.text}
        </p>
        <p className="text-gray-700 text-base">
          {producto.description}
        </p>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{producto.hashtag1}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{producto.hashtag2}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#{producto.hashtag3}</span>
        </div>
      </div>
    </div>
  )
}