"use client"

const Footer = () => {
  return (
    <div className="text-xl border-double border-t-8 border-gray-800 bg-gray-200 w-full h-full">
      <div className="bg-indigo-900 p-2 w-full h-full grid grid-rows-3">
        <div className="text-center row-span-1">
          <p className="align-center">Press the channel up/down keys to watch free TV</p>
        </div>
        <div className="row-span-2 grid grid-cols-3 px-24">
          <div className="col-span-1 m-auto">
            <p>1 - Promo</p>
            <p>4 - ABC</p>
          </div>
          <div className="col-span-1 m-auto">
            <p>2 - HBO</p>
            <p>5 - NBC</p>
          </div>
          <div className="col-span-1 m-auto">
            <p>3 - </p>
            <p>6 - Independent</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer