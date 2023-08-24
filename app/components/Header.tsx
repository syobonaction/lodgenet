import * as types from "../graph/graphql"

const Header: React.FC<types.Location> = ({
  name,
  region,
}) => {
  return (
    <div>
      <h1 className="text-4xl">Welcome to {name}, {region}</h1>   
    </div>
  )
}

export default Header