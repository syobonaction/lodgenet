"use client"

import { AppDispatch } from "@/store/store"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { increment } from "@/store/features/weatherScreenSlice"

interface TimeCycledContentProps {
  children: React.ReactNode,
  delay: number
}

const TimeCycledContent: React.FC<TimeCycledContentProps> = ({
  children,
  delay,
}) => {
  const childArr = React.Children.toArray(children)
  const [index, setIndex] = useState<number>(0)
  const [currentChild, setCurrentChild] = useState<React.ReactNode>(childArr[index])

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const handleTransition = () => {
      if(index < childArr.length - 1) {
        setIndex(index + 1)
      } else {
        dispatch(increment())
        setIndex(0)
      }
      setCurrentChild(childArr[index])
    }

    const interval = setInterval(handleTransition, delay)
    return () => clearInterval(interval)
  }, [delay, childArr, index, dispatch])

  return (
    <div className="w-full h-full">
      {currentChild}
    </div>
  )
}

export default TimeCycledContent