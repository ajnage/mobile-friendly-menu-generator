import React from 'react'

import Card from 'react-bootstrap/Card';
import { FaBeer } from "react-icons/fa";

function CategoryCards(props) {
  return (
    <>
        <Card className=' m-2 rounded-4 d-flex' style={{ flex: "0 0 auto", width: "8rem", height: "8rem" }}>
            <Card.Title className=' mx-auto mt-4' ><FaBeer size={"2rem"} /></Card.Title>
            <Card.Body className=' mx-auto'><h4 className=' fw-bold fs-5'>All Menu</h4></Card.Body>
        </Card>
    </>
  )
}

export default CategoryCards
