import React, { useState } from 'react'

import EditCategoryForm from './EditCategoryForm';

function CategoryCards(props) {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShow = () => setShowEditModal(true);
  const handleClose = () => setShowEditModal(false);

  return (
    <>
      <div className='my-auto'>
        <h4
          onClick={handleShow}
          style={{ cursor: 'pointer' }}
          className='fw-bold fs-5 border border-2 px-3 py-1 m-2 rounded mt-0'>
          {props.title}
        </h4>
        <EditCategoryForm
          id={props.id}
          title={props.title}
          show={showEditModal}
          handleClose={handleClose}
          updateCategoryForm={props.updateCategoryForm}
          handleDelete={props.handleDelete}
        />
      </div>
    </>
  )
}

export default CategoryCards