import { useContext } from 'react'
import { AppContext } from '../contexts/MyContext'

export default function useMyContext() {
  return useContext(AppContext)
}
