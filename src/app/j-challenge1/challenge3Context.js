import { createContext, useContext, useState } from "react"

const Challenge3Context = createContext()

export const Challenge3ContextProvider = ({ children }) => {
  const [email, setEmail] = useState(null)

  const updateEmail = (data) => {
    setEmail(data)
  }

  return (
    <Challenge3Context.Provider value={{ email, updateEmail }}>
      {children}
    </Challenge3Context.Provider>
  )
}

export const useChallenge3Context = () => useContext(Challenge3Context)
