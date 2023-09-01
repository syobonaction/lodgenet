"use client"

interface HeaderTypes {
  location: string,
  region: string,
}

const Header: React.FC<HeaderTypes> = ({
  location,
  region,
}) => {
  return (
    <div>
      <h1 className="text-4xl">Welcome to {location}, {region}</h1>   
    </div>
  )
}

export default Header