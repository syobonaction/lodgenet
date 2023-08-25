"use client"

const ExtendedForecast = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="grid grid-flow-col grid-cols-3 gap-8 pt-24">
      {children}
    </div>
  )
}

export default ExtendedForecast