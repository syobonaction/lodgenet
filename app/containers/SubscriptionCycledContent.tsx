import { AppDispatch, store } from "@/store/store"
import React from "react"
import { useState } from "react"

const SubscriptionCycledContent = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const childArr = React.Children.toArray(children)
  const [index, setIndex] = useState<number>(0)
  const [currentChild, setCurrentChild] = useState<React.ReactNode>(childArr[index])

  store.subscribe(() => {
    const nextScreen = store.getState().weatherScreen.screen
    setIndex(nextScreen)
    setCurrentChild(childArr[index])
  })
  
  return (
    <div>
      {currentChild}
    </div>
  )
}

export default SubscriptionCycledContent