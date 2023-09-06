import Image from "next/image"
import Model from "../Model"
import Scene from "../Scene"
import { useEffect, useState } from "react"

const GameCard = () => {
  const [display, setDisplay] = useState<string>("opacity-0")

  useEffect(() => {
    setTimeout(() => {
      setDisplay("opacity-100")
    }, 1000)
  })

  return (
    <div className={`w-full h-full grid grid-cols-1 transition-opacity ease-in-out delay-150 duration-1000 ${display}`}>
      <div className="ml-auto lg:-mt-16 xl:-mt-32 col-start-1 row-start-1">
        <Image 
          src="/images/mario_wingcap.png" 
          alt="mario with wingcap"
          width={300}
          height={300}
        />
      </div>
      <div className="mx-auto mt-auto col-start-1 w-4/5 h-4/5 row-start-1">
        <Scene>
          <Model 
            url="/models/n64_logo/logo.glb" 
            rotation={[0.5, 0.8, 0]} 
            spin 
          />
        </Scene>
      </div>
      <div className="lg:text-5xl xl:text-6xl col-start-1 row-start-1">
        <p>Play N64</p>
        <p>Games</p>
      </div>
      <div className="lg:text-4xl xl:text-5xl col-start-1 row-start-1 text-center mt-auto">
        Press <span className="text-amber-300">ENTER</span> now!
      </div>
    </div>
  )
}

export default GameCard