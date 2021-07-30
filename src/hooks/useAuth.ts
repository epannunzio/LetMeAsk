import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContexts'

export function useAuth() {
  const value = useContext(AuthContext)

  return value;
}

