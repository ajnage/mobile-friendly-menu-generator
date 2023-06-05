import { useReducer } from "react";

const ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  GET_ITEMS: 'GET_ITEMS',
  DELETE_ITEMS: 'DELETE_ITEMS'
}

const reducer = (state, action) => {
  switch(action.type){
    case ACTIONS.ADD_ITEM: return [...state, action.payload]
    case ACTIONS.UPDATE_ITEM: return [
      ...state.filter(item => item.name !== action.payload.name),
      action.payload.newItem
    ]
    case ACTIONS.DELETE_ITEMS: return state.filter(item => item.name !== action.payload)
    default: 
      return state
  }
}

const initialState = [];

export const useItemStore = () => {
  const [items, dispatch] = useReducer(reducer, initialState)

  const addItem = (item) => dispatch({type: ACTIONS.ADD_ITEM, payload: item})
  const deleteItem = (item) => dispatch({type: ACTIONS.DELETE_ITEMS, payload: item.name})
  const updateItem = (name, newItem) => dispatch({type: ACTIONS.UPDATE_ITEM, payload: {name, newItem}})

  return {
    items, addItem, deleteItem, updateItem
  }
}
