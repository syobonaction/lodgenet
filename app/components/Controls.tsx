"use client"

import ExitModal from "./modals/ExitModal"
import { useContext, useRef, useState } from "react"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const Controls = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [displayExitModal, setDisplayExitModal] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null!)
  const pathname = usePathname()
  const router = useRouter()
  
  const handleOnblur = () => {
    inputRef.current.focus();
  }

  const handleControls = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch(e.key) {
      case "Escape":
        if(pathname !== "/") {
          if(displayExitModal) {
            router.push('/')
            setDisplayExitModal(false)
          } else {
            setDisplayExitModal(true)
          }
        }
        break
      case "Enter":
        if(pathname === "/") {
          router.push('/weather')
        }
      default:
        break
    }
  }

  return (
    <div>
      <ExitModal show={displayExitModal}/>
      {children}
      <div className="w-0 h-0">
        <input 
          ref={inputRef} 
          className="w-0 h-0" 
          name="controls" 
          onBlur={handleOnblur} 
          onKeyUp={handleControls} 
          autoFocus 
        />
      </div>
    </div>
  )
}

export default Controls