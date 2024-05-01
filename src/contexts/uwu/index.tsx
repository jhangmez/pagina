// src/contexts/UwuModeContext.tsx

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react'

interface UwuModeContextData {
  isUwuMode: boolean
}

const UwuModeContext = createContext<UwuModeContextData>({ isUwuMode: false })

interface UwuModeProviderProps {
  children: ReactNode // Define el tipo de 'children' como ReactNode
}

export const UwuModeProvider: React.FC<UwuModeProviderProps> = ({
  children
}) => {
  const [isUwuMode, setIsUwuMode] = useState(false)

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const uwuMode = searchParams.get('uwu')
    setIsUwuMode(uwuMode === 'true')
  }, [])

  return (
    <UwuModeContext.Provider value={{ isUwuMode }}>
      {children}
    </UwuModeContext.Provider>
  )
}

export const useUwuMode = () => useContext(UwuModeContext)
