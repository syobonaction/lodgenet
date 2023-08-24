import * as types from "../graph/graphql"

const Header: React.FC<types.Location> = ({
  name,
  region,
}) => {
  return (
    <div>Welcome to {name}, {region}</div>
  )
}

export default Header