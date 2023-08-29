import React, { useEffect, useState } from "react"

const CycledContent = ({
  children,
  delay,
}: {
  children: React.ReactNode,
  delay: number
}) => {
  const childArr = React.Children.toArray(children)
  const [index, setIndex] = useState<number>(0)
  const [currentChild, setCurrentChild] = useState<React.ReactNode>(childArr[index])

  useEffect(() => {
    const handleTransition = () => {
      setCurrentChild(childArr[index])
      console.log("i: ", index)
      if(index < childArr.length - 1) {
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
    }

    const interval = setInterval(handleTransition, delay)
    return () => clearInterval(interval)
  }, [delay, childArr, index])

  return (
    <div className="transition-opacity">
      {currentChild}
    </div>
  )
}

export default CycledContent