import { useState } from 'react'
import InsertRestaurant from './InsertRestaurantForm'
import { IoIosAddCircleOutline } from "react-icons/io";


function AddRestaurantCard(props) {
    const [showAddForm, setShowAddForm] = useState(false);

    const handleFormShow = () => setShowAddForm(true);
    const handleFormClose = () => setShowAddForm(false);

    return (
        <InsertRestaurant handleFormClose={handleFormClose} showForm={showAddForm} handleInsertNewRestaurant={props.handleInsertNewRestaurant} >
            {props.children}
        </InsertRestaurant>
    )

}

export default AddRestaurantCard;