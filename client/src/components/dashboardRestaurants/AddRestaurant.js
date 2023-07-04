import { useState } from 'react'
import InsertRestaurant from './InsertRestaurantForm'
import { IoIosAddCircleOutline } from "react-icons/io";


function AddRestaurantCard(props) {
    const [showAddForm, setShowAddForm] = useState(false);

    const handleFormShow = () => setShowAddForm(true);
    const handleFormClose = () => setShowAddForm(false);

    return <>
        <IoIosAddCircleOutline
            style={{ fontSize: "300px", color: "#FFFFFF" }}
        >
            <InsertRestaurant handleFormClose={handleFormClose} showForm={showAddForm} handleInsertNewRestaurant={props.handleInsertNewRestaurant} />
        </IoIosAddCircleOutline>
    </>
}

export default AddRestaurantCard;