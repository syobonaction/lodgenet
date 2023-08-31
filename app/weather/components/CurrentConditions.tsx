import TimeCycledContent from "@/app/containers/TimeCycledContent"

const CurrentConditions = () => {
  return (
    <TimeCycledContent delay={18000}>
      <div className="border-double border-gray-800 border-8 text-center bg-gray-200 mt-24">
        <div className="bg-gradient-to-b from-indigo-800 to-blue-600 p-4">
          <h1 className="text-4xl">Current Conditions</h1>
        </div>
      </div>
    </TimeCycledContent>
  )
}

export default CurrentConditions