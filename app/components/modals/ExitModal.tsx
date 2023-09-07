"use client"

interface ExitModalProps {
  show: boolean
}

const ExitModal: React.FC<ExitModalProps> = ({
  show,
}) => {
  return (
    <div className={`absolute w-full h-full z-50 ${!show && "hidden"}`}>
      <div className="l-0 t-0 absolute w-full h-full bg-gray-950 opacity-90"></div>
      <div className="p-24 absolute w-full h-full">
        <div className="border-double border-gray-800 border-8 text-center bg-gray-200 w-full h-full">
          <div className="m-auto p-24 text-white text-6xl bg-gradient-to-b from-indigo-800 to-blue-600 w-full h-full">
            Press <span className="text-amber-300">Esc</span> again to return to the main menu.
          </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default ExitModal