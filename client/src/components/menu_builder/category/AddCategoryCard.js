import { useState } from 'react'
import InsertCategory from './InsertCategoryForm'

function AddCategoryCard(props) {
    const [showAddForm, setShowAddForm] = useState(false);

    const handleFormShow = () => setShowAddForm(true);
    const handleFormClose = () => setShowAddForm(false);

    return <>
        <h4
            onClick={handleFormShow}
            style={{ cursor: 'pointer' }}
            className='fs-5 border border-1 px-3 py-1 m-2 rounded mt-0 text-secondary'>
            + Add New
        </h4>
        <InsertCategory handleFormClose={handleFormClose} showForm={showAddForm} handleInsertNewCategory={props.handleInsertNewCategory} />
    </>
}

export default AddCategoryCard;