import React from "react"
import { useParams } from "react-router-dom"

export const SingleItem = () => {
  const params = useParams()
  const {name} = params
  
  return <h1>{name}</h1>
}