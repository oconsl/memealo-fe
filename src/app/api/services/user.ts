import axios from 'axios'
import { errorHandler } from './error-handler'

const BASE_URL = process.env.API_BASE_URL

export const signIn = async ({username, password}: {
  username: string
  password: string
}) => {
  try{
    const { data } = await axios.post(`${BASE_URL}/auth/sign-in`, { username, password })
    return data
  } catch(error) {
    console.log(error)
    return errorHandler(error)
  }
}

export const signUp = async ({username, password, email}: {
  username: string
  password: string
  email: string
}) => {
  try{
    const { data } = await axios.post(`${BASE_URL}/auth/sign-up`, { username, password, email })
    return data
  } catch(error) {
    console.log(error)
    return errorHandler(error)
  }
}

export const updateUser = async ({username, password, email, id}: {
  username?: string
  password?: string
  email?: string
  id: string
}) => {
  try{
    const { data } = await axios.put(`${BASE_URL}/user/${id}`, { username, password, email })
    return data
  } catch(error) {
    console.log(error)
    return errorHandler(error)
  }
}


export const updateUserMiscellaneous = async ({id, cosmetics, coins, achievements}: {
  id: string
  cosmetics?: string[]
  coins?: number
  achievements?: string[]
}) => {
  try{
    const { data } = await axios.put(`${BASE_URL}/user/${id}/miscellaneous`, { cosmetics, coins, achievements })
    return data
  } catch(error) {
    console.log(error)
    return errorHandler(error)
  }
}
