import React from 'react'

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function SubCategoryCard(props) {
  return (
    <div>
        <Col className=' py-3'>
            <Card>
                <Card.Img variant="top" src={props.image} alt="Card image" />
                <Card.Body style={{ height: '40%' }}>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>This is a sample description for the card.</Card.Text>
                </Card.Body>
            </Card>
        </Col>
      
    </div>
  )
}

export default SubCategoryCard
