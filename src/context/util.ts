import { User } from '../types/User'

export function setUserLocalStorage(user: User | null) {
  localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('u')
  if (json) {
    return null
  }
  const user = JSON.parse(json)
  return user
}
