 import React, { useState } from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InsertSubCategory from "./InsertSubCategory";

function AddSubCategoryCard(props) {
    const [showForm, setShowForm] = useState(false);

    const handleFormClose = () => setShowForm(false);
    const handleFormShow = () => setShowForm(true);

    return (
        <div>
            <Col className="d-flex align-items-stretch" style={{ height: '100%' }} onClick={handleFormShow}>
                <Card style={{ cursor: 'pointer', height: '100%', display: 'flex', gap: '1.5rem' }}>
                    <Card.Img
                        variant="top"
                        src="https://static.vecteezy.com/system/resources/thumbnails/001/500/603/small/add-icon-free-vector.jpg"
                        alt="Card image" />
                    <Card.Body className=" p-0 m-0">
                        <Card.Title className="text-center fs-4 text-secondary">Add New</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

            <InsertSubCategory
                showForm={showForm}
                handleFormClose={handleFormClose}
                handleInsertNewSubCategory={props.handleInsertNewSubCategory}
            />
        </div>
    );
}

export default AddSubCategoryCard