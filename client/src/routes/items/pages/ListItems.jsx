import React from "react"
import { useItemContext } from "../hooks/context"
import { useNavigate } from "react-router-dom"

export const ListItems = () => {
  const {items, deleteItem} = useItemContext()
  const navigate = useNavigate()

  const showItem = item => {
    return navigate(`/items/item/${item.name}`)
  }

  const editItem = item => {
    return navigate(`/items/edit/${item.name}`)
  }

  return (
    <>
      <table>
        <tbody>
        {
          items.map(item => {
            return <tr key={item.name} onClick={() => showItem(item)}>
              <td> {item.name} </td>
              { /* <td> {item.description} </td> */ }
              <td> {item.category} </td>
              <td> {item.price} </td>
              <td> {item.image ? <img src={item.image}/> :<></>} </td>
              <td> 
                  <button onClick={(evt) => {
                      evt.stopPropagation()
                      deleteItem(item)
                    }}> 
                    Delete Item 
                  </button> 

                  <button onClick={(evt) => {
                    evt.stopPropagation();
                    editItem(item)
                  }}> 
                    Edit Item 
                  </button> 
              </td>
            </tr>
          })
        }
        </tbody>
      </table>
    </>
  )
}