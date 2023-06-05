import React, { useState } from "react"
import {useNavigate} from "react-router-dom"
import { useItemContext } from "../hooks/context"
import style from './items.module.css'

export const AddItem = () => {
  
  const [item, setItem] = useState(null)
  const {addItem} = useItemContext()
  const navigate = useNavigate()

  const handleAddItem = (evt) => {
    evt.preventDefault();
    addItem(item)
    navigate("/items")
  }

  const updateName = (evt) => setItem({...item, name: evt.target.value})
  const updateDescription = (evt) => setItem({...item, description: evt.target.value})
  const updateCategory = (evt) => setItem({...item, category: evt.target.value})
  const updatePrice = (evt) => setItem({...item, price: evt.target.value})
  const selectFile = (evt) => {
    const file = evt?.target?.files?.[0]
    if(file){
      const imageData = URL.createObjectURL(file)
      setItem({ ...item, file, image: imageData })
    }
    else {
      setItem({ ...item, file: undefined, image: undefined })
    }
  }

  return (
    <>
      <form className={`row ${style.form}`} onSubmit={handleAddItem}>
          <div className={`${style.col}`}>
            <label htmlFor="nameoffood" className="form-label">Name</label>
            <textarea className="form-control" id="nameoffood" name="nameoffood" onInput={updateName}>{item?.name}</textarea>
          </div>
          <div className={`${style.col}`}>
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" name="description" onInput={updateDescription}>{item?.description}</textarea>
          </div>
          <div className={`${style.col}`}>
            <label htmlFor="category" className="form-label">Category</label>
            <textarea className="form-control" id="category" name="category" onInput={updateCategory}>{item?.category}</textarea>
          </div>
          <div className={`${style.col}`}>
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" id="price" name="price" value={item?.price ?? 0} onInput={updatePrice} />
          </div>
          <div className={`${style.col}`}>
            <label htmlFor="imageUpload" className="form-label">Image</label>
            <input type="file" className="form-control" id="imageUpload" name="file" onChange={selectFile}/>
            {item?.image && <img width="300px" height="300px" src={item.image} /> }
          </div>
          <button type="submit" className="btn btn-primary" value="Upload">Submit</button>
        </form>
    </>
  )
}