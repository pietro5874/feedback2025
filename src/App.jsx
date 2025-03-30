import iconStar from "./assets/icon-star.svg"
import { useState } from "react"

export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)

  function handleNotaAvaliacao(nota){
    setNotaAvaliacao(nota)
  }

  return(
    <div className="bg-gradient-dark text-white mx-6 p-6
    rounded-2xl font-overpass">
      <div className="pg-dark-blue w-fit p-4 rounded-full mb-4">
        <img src={iconStar} alt="icon star" />
      </div>

      <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>

      <p className="text-sn text-light-grey mb-6 leading-1">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

      <div className="flex justify-between mb-6">
        <input type="button" value={1} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold" onClick={() => handleNotaAvaliacao(1)}/>
        <input type="button" value={2} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold" onClick={() => handleNotaAvaliacao(2)}/>
        <input type="button" value={3} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold" onClick={() => handleNotaAvaliacao(3)}/>
        <input type="button" value={4} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold" onClick={() => handleNotaAvaliacao(4)}/>
        <input type="button" value={5} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold" onClick={() => handleNotaAvaliacao(5)}/>
      </div>

      <button className="bg-orange w-full uppercase tracking-1 font-bold rounded-3xl text-sm py-3">Submit</button>
    </div>
  )
}